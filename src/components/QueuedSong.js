import React from "react";
import { Avatar, IconButton, Typography, makeStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles({
  avatar: {
    width: 44,
    height: 44,
  },
  text: {
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  container: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "50px auto 50px",
    gridGap: 12,
    alignItems: "center",
    marginTop: 10,
  },
  songInfoContainer: {
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});

function QueuedSong({ song: { thumbnail, artist, title } }) {
  const classes = useStyles();
  return (
    <div>
      <Avatar src={thumbnail} alt="Song thumbnail"></Avatar>
      <div>
        <Typography variant="subtitle">{title}</Typography>
        <Typography color="textSecondary" variant="body2">
          {artist}
        </Typography>
      </div>
      <IconButton>
        <Delete color="error" />
      </IconButton>
    </div>
  );
}

export default QueuedSong;
