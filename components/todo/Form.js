import { useState } from "react";

import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";

export default function Form({ pushTodo }) {
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
      <FormControl style={styles.formControl} id="todo">
        <Input
          style={styles.input}
          value={todoValue}
          variant="flushed"
          placeholder="할 일을 입력하세요"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          fontSize="1.2rem"
          padding="1.5rem 2rem"
          colorScheme="blue"
          type="submit"
        >
          추가
        </Button>
      </FormControl>
    </form>
  );
}

const styles = {
  formControl: {
    display: "flex",
    justifyContent: "center",
  },

  input: {
    width: "90%",
    marginRight: "1rem",
    fontSize: "1.6rem",
  },
};
