import React from "react";
import { AddSong, Header, SongList, SongPlayer } from "./components";
function App() {
  return (
    <>
      <Header />
      <AddSong />
      <SongList />
      <SongPlayer />
    </>
  );
}

export default App;
