import React from "react";
import { AddSong, Header, SongList, SongPlayer } from "./components";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <>
      <Header />
      <Grid container space={3}>
        <Grid item xs={12} md={7} style={{ paddingTop: 80 }}>
          <AddSong />
          <SongList />
        </Grid>
        <Grid
        style={{position: 'fixed',
          width: '100%',
          right: 0,
          top: 70
      }}
        item xs={12} md={5}>
          <SongPlayer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
