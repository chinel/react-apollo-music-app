import React from "react";
import { AddSong, Header, SongList, SongPlayer } from "./components";
import { Grid, useMediaQuery } from "@material-ui/core";

function App() {
  // const matches = useMediaQuery("(min-width: 600px)"); this can also be done as shown below using the theme
  const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <>
      <Header />
      <Grid container space={3}>
        <Grid item xs={12} md={7} style={{ paddingTop: 80 }}>
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMd
              ? { position: "fixed", width: "100%", right: 0, top: 70 }
              : {
                  position: "fixed",
                  width: "100%",
                  left: 0,
                  bottom: 0,
                }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
