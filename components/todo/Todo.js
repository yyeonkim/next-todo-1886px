import { useState } from "react";

import Item from "./Item";
import Form from "./Form";

import { Heading, Container } from "@chakra-ui/react";

export default function Todo() {
  const [id, setId] = useState(0);
  const [todoList, setTodoList] = useState([]);

  // 새로운 todo를 배열에 추가하고 todo List 업데이트
  const pushTodo = (value) => {
    const todos = todoList;
    const todo = { id, value };
    setId((current) => current + 1);
    todos.push(todo);
    setTodoList(todos);
  };

  const deleteTodo = (index) => {
    const todos = todoList.filter((todo, _index) => index !== _index);
    setTodoList(todos);
  };

  return (
    <Container maxW="container.lg">
      <Form pushTodo={pushTodo} />
      <Heading margin="2rem 1rem">할 일 목록 ✍</Heading>
      <Item todoList={todoList} deleteTodo={deleteTodo} />
    </Container>
  );
}
