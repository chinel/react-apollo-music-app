import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import QueuedSong from "./QueuedSong";

function QueuedSongList({ queue }) {
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  /* const song = {
    title: "First Song",
    artist: "Manny",
    thumbnail:
      "https://i1.sndcdn.com/artworks-000670470790-ej1gvb-t500x500.jpg",
  }; */
  return (
    greaterThanMd && (
      <div
        style={{
          margin: "10px 0",
        }}
      >
        <Typography color="textSecondary" variant="button">
          QUEUE ({queue.length})
        </Typography>
        {queue.map((song, i) => (
          <QueuedSong key={i} song={song} />
        ))}
      </div>
    )
  );
}

export default QueuedSongList;
