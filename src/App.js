import React from "react";
import { AddSong, Header, SongList, SongPlayer } from "./components";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <>
      <Header />
      <Grid container space={3}>
        <Grid item xs={12} md={7}>
          <AddSong />
          <SongList />
        </Grid>
        <Grid item xs={12} md={5}>
          <SongPlayer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
