import React from "react";
import { AddSong, Header, SongList, SongPlayer } from "./components";
import { Grid, useMediaQuery, Hidden } from "@material-ui/core";

export const SongContext = React.createContext({
  song: {
    id: "1dcd44ea-1510-4cdf-baa3-155f58dad6c2",
    title: "Holy legendado",
    artist: "Donnie Mcclurkin",
    thumbnail: "https://img.youtube.com/vi/JLwLBdnuvvc/0.jpg",
    url: "https://www.youtube.com/watch?v=JLwLBdnuvvc",
    duration: 633,
  },
  isPlaying: false,
});

function App() {
  const initialSongState = React.useContext(SongContext);
  const [state, dispatch] = React.useReducer(() => {}, initialSongState);
  // const matches = useMediaQuery("(min-width: 600px)"); this can also be done as shown below using the theme
  const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <>
      {/*greaterThanSm && <Header /> on way of hiding an element*/}

      {/**A more declarative approach*/}
      <Hidden only="xs">
        <Header />
      </Hidden>
      <Grid container space={3}>
        <Grid
          item
          xs={12}
          md={7}
          style={{ paddingTop: greaterThanSm ? 80 : 10 }}
        >
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
