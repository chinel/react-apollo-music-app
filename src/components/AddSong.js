import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { AddBoxOutlined, Link } from "@material-ui/icons";
import SoundCloudPlayer from "react-player/soundcloud";
import YouTubePlayer from "react-player/youtube";
import ReactPlayer from "react-player";
import { useMutation } from "@apollo/client";
import { ADD_SONG } from "../graphql/mutation";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },
  urlInput: {
    margin: theme.spacing(1),
  },
  addSongButton: {
    margin: theme.spacing(1),
  },
  dialog: {
    textAlign: "center",
  },
  thumbnail: {
    width: "90%",
  },
}));

const DEFAULT_SONG = {
  duration: 0,
  title: "",
  artist: "",
  thumbnail: "",
};

function AddSong() {
  const [url, setUrl] = useState("");
  const [playable, setPlayable] = useState(false);
  const classes = useStyles();
  const [dialog, setDialog] = useState(false);
  const [addSong, { error }] = useMutation(ADD_SONG);
  const [song, setSong] = React.useState(DEFAULT_SONG);

  React.useEffect(() => {
    const isPlayable =
      SoundCloudPlayer.canPlay(url) || YouTubePlayer.canPlay(url);
    setPlayable(isPlayable);
  }, [url]);

  function handleChangeSong(event) {
    const { name, value } = event;

    setSong((prevSong) => ({
      ...prevSong,
      [name]: value,
    }));
  }

  function handleCloseDialog() {
    setDialog(false);
  }

  async function handleEditSong({ player }) {
    const nestedPlayer = player.player.player;
    let songData;
    if (nestedPlayer.getVideoData) {
      songData = getYoutubeInfo(nestedPlayer);
    } else if (nestedPlayer.getCurrentSound) {
      songData = await getSoundCloudInfo(nestedPlayer);
    }

    setSong({ ...songData, url });
  }

  function getYoutubeInfo(player) {
    const duration = player.getDuration();
    const { title, video_id, author } = player.getVideoData();
    const thumbnail = `https://img.youtube.com/vi/${video_id}/0.jpg`;
    return { duration, title, artist: author, thumbnail };
  }

  function getSoundCloudInfo(player) {
    return new Promise((resolve) => {
      player.getCurrentSound((songData) => {
        if (songData) {
          resolve({
            duration: Number(songData.duration / 1000),
            title: songData.title,
            artist: songData.user.username,
            thumbnail: songData.artwork_url.replace("-large", "-t500x500"),
          });
        }
      });
    });
  }

  async function handleAddSong() {
    try {
      const { url, thumbnail, duration, title, artist } = song;

      //this addSong returns a promise so we can use async await for this
      await addSong({
        url: url.length > 0 ? url : null,
        thumbnail: thumbnail.length > 0 ? thumbnail : null,
        duration: duration > 0 ? duration : null,
        title: title.length > 0 ? title : null,
        artist: artist.length > 0 ? artist : null,
      });
      handleCloseDialog();
      setSong(DEFAULT_SONG);
      setUrl("");
    } catch (error) {
      console.error("Error adding song", error);
    }
  }

  function handleError(field) {
    return error.graphQLErrors[0].extensions.path.includes(field);
  }

  const { thumbnail, title, artist } = song;

  return (
    <div className={classes.container}>
      <Dialog
        className={classes.dialog}
        open={dialog}
        onClose={handleCloseDialog}
        scroll="paper"
      >
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <img
            className={classes.thumbnail}
            src={thumbnail}
            alt="song thumbnail"
          />
          <TextField
            value={title}
            margin="dense"
            name="title"
            label="Title"
            fullWidth
            onChange={handleChangeSong}
          />
          <TextField
            value={artist}
            margin="dense"
            name="artist"
            label="Artist"
            fullWidth
            onChange={handleChangeSong}
          />
          <TextField
            margin="dense"
            name="thumbnail"
            label="Thumbnail"
            fullWidth
            value={thumbnail}
            onChange={handleChangeSong}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button variant="outlined" color="primary" onClick={handleAddSong}>
            Add Song
          </Button>
        </DialogActions>
      </Dialog>
      <TextField
        className={classes.urlInput}
        onChange={(event) => setUrl(event.target.value)}
        value={url}
        placeholder="Add Youtube or Soundcloud Url"
        fullWidth
        margin="normal"
        type="url"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Link />
            </InputAdornment>
          ),
        }}
      />
      <Button
        disabled={!playable}
        className={classes.addSongButton}
        onClick={() => setDialog(true)}
        variant="contained"
        color="primary"
        endIcon={<AddBoxOutlined />}
      >
        Add
      </Button>
      <ReactPlayer url={url} hidden onReady={handleEditSong} />
    </div>
  );
}

export default AddSong;
