import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function Item({ todoList, deleteTodo }) {
  const todoLabel = useRef([]);
  const checkbox = useRef([]);

  const handleBoxClick = (index) => {
    const { style } = todoLabel.current[index]; // 클릭한 todo의 style
    const { checked } = checkbox.current[index];
    // 체크하면 todo에 중간 줄 긋기 (toggle)
    style.textDecoration = checked ? "line-through" : null;
    style.color = checked ? "gray" : null;
  };

  return (
    <div>
      {todoList.map((todo, index) => (
        <div key={todo.id}>
          <input
            ref={(box) => (checkbox.current[index] = box)}
            type="checkbox"
            id={index}
            onClick={() => handleBoxClick(index)}
          />
          <label
            ref={(label) => (todoLabel.current[index] = label)}
            htmlFor={index}
          >
            {todo.value}
          </label>
          <IoCloseOutline size="2rem" onClick={() => deleteTodo(index)} />
        </div>
      ))}
    </div>
  );
}
