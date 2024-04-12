import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Grid, Paper } from "@mui/material";
import { addTodo } from "../action/Actions";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      sx={{
        padding: 2,
        margin: "10px auto",
        borderRadius: 1,
        border: 1,
        borderColor: "rgba(22, 22, 22, 0.5)",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Enter Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            disabled={!text.trim()}
            sx={{
              height: 40,
              fontSize: "0.9rem",
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoForm;
