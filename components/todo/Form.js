import { useState } from "react";

import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";

export default function TodoForm({ pushTodo }) {
  const [todoValue, setValue] = useState("");

  const submitTodo = (event) => {
    event.preventDefault();

    if (todoValue) {
      pushTodo(todoValue); // todo 배열에 input 값 추가
      setValue("");
    }
  };

  return (
    <form onSubmit={submitTodo}>
      <FormControl id="todo">
        <Input
          value={todoValue}
          variant="flushed"
          placeholder="할 일을 입력하세요"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button colorScheme="blue" type="submit">
          추가
        </Button>
      </FormControl>
    </form>
  );
}
