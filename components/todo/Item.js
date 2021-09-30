import { IoCloseOutline } from "react-icons/io5";

import { Box } from "@chakra-ui/react";

export default function Item({ todoList, deleteTodo }) {
  const checkTodo = (event) => {
    const { style } = event.target.nextSibling;
    const { checked } = event.target;
    style.textDecoration = checked ? "line-through" : null;
    style.color = checked ? "gray" : null;
  };

  return todoList.map((todo, index) => (
    <Box key={todo.id} style={styles.todoBox}>
      <input
        style={styles.checkbox}
        type="checkbox"
        id={index}
        onClick={checkTodo}
      />
      <label style={styles.todoLabel} htmlFor={index}>
        {todo.value}
      </label>
      <IoCloseOutline size="2rem" onClick={() => deleteTodo(index)} />
    </Box>
  ));
}

const styles = {
  todoBox: {
    display: "flex",
    fontSize: "2rem",
    alignItems: "center",
  },

  checkbox: {
    margin: "0 2rem",
    transform: "scale(1.5)",
  },

  todoLabel: {
    marginRight: "2rem",
  },
};
