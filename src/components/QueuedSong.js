import React from "react";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

function QueuedSong({ song: { thumbnail, artist, title } }) {
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
