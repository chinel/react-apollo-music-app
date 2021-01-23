import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Slider,
  Typography,
} from "@material-ui/core";
import QueuedSongList from "./QueuedSongList";
import { PlayArrow, SkipNext, SkipPrevious } from "@material-ui/icons";

function SongPlayer() {
  return (
    <>
      <Card variant="outline">
        <div>
          <CardContent>
            <Typography variant="h5" component="h3">
              Title
            </Typography>
            <Typography variant="subtitle" component="p" color="textSecondary">
              Artist
            </Typography>
          </CardContent>
          <div>
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton>
              <PlayArrow />
            </IconButton>
            <IconButton>
              <SkipNext />
            </IconButton>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              00:01:30
            </Typography>
          </div>
          <Slider type="range" min={0} max={1} step={0.01} />
        </div>
        <CardMedia
         image="https://i1.sndcdn.com/artworks-000670470790-ej1gvb-t500x500.jpg"
        />
      </Card>
      <QueuedSongList />
    </>
  );
}

export default SongPlayer;
