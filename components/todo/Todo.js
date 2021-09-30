import { useState } from "react";

import Item from "./Item";
import Form from "./Form";

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
    <main>
      <Form pushTodo={pushTodo} />
      <h2>할 일 목록 ✍</h2>
      <Item todoList={todoList} deleteTodo={deleteTodo} />
    </main>
  );
}
