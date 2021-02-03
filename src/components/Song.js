import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Pause, PlayArrow, Save } from "@material-ui/icons";
import { SongContext } from "../App";
import { ADD_OR_REMOVE_FROM_QUEUE } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3),
  },
  songInfoContainer: {
    display: "flex",
    alignItems: "center",
  },
  songInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },

  thumbnail: {
    objectFit: "cover",
    width: 140,
    height: 140,
  },
  title: {
    textTransform: "capitalize",
  },
}));

export default function Song({ song }) {
  const { thumbnail, title, artist, id } = song;
  const classes = useStyles();
  const { state, dispatch } = useContext(SongContext);
  const [addOrRemoveFromQueue] = useMutation(ADD_OR_REMOVE_FROM_QUEUE, {
    onCompleted: (data) => {
      localStorage.setItem("queue", JSON.stringify(data.addOrRemoveFromQueue));
    },
  });
  const [currentSongPlaying, setCurrentSongPlaying] = useState(false);

  useEffect(() => {
    const isSongPlaying = state.isPlaying && id === state.song?.id;
    setCurrentSongPlaying(isSongPlaying);
  }, [id, state.song, state.isPlaying]);

  //conditionally dispatch an action type based on the state
  function handleTogglePlay() {
    dispatch({ type: "SET_SONG", payload: { song } });
    dispatch(state.isPlaying ? { type: "PAUSE_SONG" } : { type: "PLAY_SONG" });
  }

  function handleAddOrRemoveFromQueue() {
    addOrRemoveFromQueue({
      variables: { input: { ...song, __typename: "Song" } },
    });
  }

  return (
    <Card className={classes.container}>
      <div className={classes.songInfoContainer}>
        <CardMedia image={thumbnail} className={classes.thumbnail} />
        <div className={classes.songInfo}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.title}
            >
              {title}
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              {artist}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton size="small" color="primary" onClick={handleTogglePlay}>
              {currentSongPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton
              size="small"
              color="secondary"
              onClick={handleAddOrRemoveFromQueue}
            >
              <Save />
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}
