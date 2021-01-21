import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { PlayArrow, Save } from "@material-ui/icons";

export default function Song({ song: { thumbnail, title, artist } }) {
  return (
    <Card>
      <div>
        <CardMedia image={thumbnail} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
            {artist}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton size="small" color="primary">
            <PlayArrow />
          </IconButton>
          <IconButton size="small" color="secondary">
            <Save />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}
