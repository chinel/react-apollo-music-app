import React from "react";
import { CircularProgress } from "@material-ui/core";
import { Song } from ".";

function SongList() {
  let loading = false;

  const song = {
    title: "First Song",
    artist: "Manny",
    thumbnail:
      "https://i1.sndcdn.com/artworks-000670470790-ej1gvb-t500x500.jpg",
  };
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}
    </div>
  );
}

export default SongList;
