import React from "react";
import { CircularProgress } from "@material-ui/core";
import { Song } from ".";
import { useSubscription } from "@apollo/client";
import { GET_SONGS } from "../graphql/subscriptions";

function SongList() {
  const { data, loading, error } = useSubscription(GET_SONGS);

  /*  const song = {
    title: "First Song",
    artist: "Manny",
    thumbnail:
      "https://i1.sndcdn.com/artworks-000670470790-ej1gvb-t500x500.jpg",
  }; */

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

  if (error) return <div>Error fetching songs</div>;

  return (
    <div>
      {data.songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
}

export default SongList;
