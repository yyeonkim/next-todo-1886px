import { useRef } from "react";

export default function Form({ pushTodo }) {
  const todoInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    let { value } = todoInput.current;
    pushTodo(value); // todo 배열에 input 값 추가
    todoInput.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={todoInput} type="text" placeholder="할 일을 입력하세요" />
      <button>추가</button>
    </form>
  );
}
