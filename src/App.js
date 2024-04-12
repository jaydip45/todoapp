import React from "react";
import TodoForm from "./components/ TodoForm";
import TodoList from "./components/ TodoList";
import { Container } from "@mui/material";
import Header from "./components/Header";

function App() {
  return (
    <Container maxWidth="sm">
      <Header />
      <TodoForm />
      <TodoList />
    </Container>
  );
}

export default App;
