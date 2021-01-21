import React from "react";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import { AddBoxOutlined, Link } from "@material-ui/icons";

function AddSong() {
  return (
    <div>
      <TextField
        placeholder="Add Youtube or Soundcloud Url"
        fullwidth
        margin="normal"
        type="url"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <Link />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="primary" endIcon={<AddBoxOutlined />}>
        Add
      </Button>
    </div>
  );
}

export default AddSong;
