import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, ListItem, ListItemText , IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material'; 
import { deleteTodo, toggleTodo } from '../action/Actions';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <ListItem>
      <Checkbox
        checked={todo.completed}
        onChange={handleToggle}
      />
      <ListItemText primary={todo.text} />
      <IconButton color="primary" onClick={handleDelete}>
        <DeleteIcon /> 
      </IconButton>
    </ListItem>
  );
}

export default TodoItem;
