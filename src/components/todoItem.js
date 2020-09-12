import React from "react";
import { Flex, Checkbox, IconButton } from "@chakra-ui/core";

const TodoItem = ({ index, isCompleted, text, removeTodo, completeTodo }) => {
  return (
    <>
      <Flex justify="space-between" key={index} mb={4}>
        <Checkbox
          isChecked={isCompleted}
          onChange={completeTodo}
          textDecoration={isCompleted ? "line-through" : null}
        >
          {text}
        </Checkbox>
        <IconButton
          icon="delete"
          size="xs"
          variant="ghost"
          variantColor="red"
          onClick={removeTodo}
        />
      </Flex>
    </>
  );
};

export default TodoItem;
