import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody } from '@mui/material';
import TodoItem from  './ TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <Table>
      <TableBody>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </TableBody>
    </Table>
  );
}

export default TodoList;
