import { useState } from "react";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [id, setId] = useState(0);
  const [todoList, setTodoList] = useState([]);

  // 새로운 todo를 배열에 추가하고 todo List 업데이트
  const pushTodo = (value) => {
    if (value) {
      const todos = todoList;
      const todo = { id, value };
      setId((current) => current + 1);
      todos.push(todo);
      setTodoList(todos);
    }
  };

  const deleteTodo = (value) => {
    const todos = todoList.filter((todo) => todo.value !== value);
    setTodoList(todos);
  };

  return (
    <main>
      <Form pushTodo={pushTodo} />
      <h2>할 일 목록 ✍</h2>
      <Item todoList={todoList} deleteTodo={deleteTodo} />
    </main>
  );
}
