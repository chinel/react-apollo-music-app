import React, { useState } from "react";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import { AddBoxOutlined, Link } from "@material-ui/icons";

function AddSong() {
  const [dialog, setDialog] = useState(false);
  return (
    <div>
      <TextField
        placeholder="Add Youtube or Soundcloud Url"
        fullWidth
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
      <Button
        onClick={() => setDialog(true)}
        variant="contained"
        color="primary"
        endIcon={<AddBoxOutlined />}
      >
        Add
      </Button>
    </div>
  );
}

export default AddSong;
