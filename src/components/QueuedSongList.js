import React from "react";
import { Typography } from "@material-ui/core";

function QueuedSongList() {
  return (
    <div
      style={{
        margin: "10px 0",
      }}
    >
      <Typography color="textSecondary" variant="button">
        QUEUE (5)
      </Typography>
    </div>
  );
}

export default QueuedSongList;
