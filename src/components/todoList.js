import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/core";
import TodoItem from "./todoItem";
import { request } from "graphql-request";
import {
  GET_TODOS,
  ADD_TODO,
  CHECK_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
} from "../graphql/todoList";

const Endpoint =
  "https://api-eu-central-1.graphcms.com/v2/ckf0zw4p04i6601xogdtl2vac/master";

const TodoList = () => {
  request(Endpoint, GET_TODOS).then((data) => setTodos(data.todoItems));
  const [todos, setTodos] = useState([]);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  function addTodo(text) {
    request(Endpoint, ADD_TODO, { text });
  }

  const completeTodo = (id, isCompleted) => {
    request(Endpoint, CHECK_TODO, { id: id, check: !isCompleted });
  };

  const removeTodo = (id) => {
    request(Endpoint, DELETE_TODO, { id: id });
  };

  const removeAllTodos = () => {
    request(Endpoint, DELETE_ALL_TODOS);
  };

  let done = todos.filter((todo) => todo.isCompleted === true);
  let pending = todos.filter((todo) => todo.isCompleted === false);

  return (
    <>
      <Stack
        isInline
        mb={4}
        as="form"
        onSubmit={handleSubmit}
        maxW="500px"
        mx="auto"
      >
        <Input
          size="md"
          type="text"
          placeholder="kaj ma"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          size="md"
          variantColor="blue"
          _focus={{ outline: "none" }}
          type="submit"
        >
          Add
        </Button>
      </Stack>
      <Tabs maxW="500px" mx="auto">
        <TabList mb={4}>
          <Tab _focus={{ outline: "none" }}>All</Tab>
          <Tab _focus={{ outline: "none" }}>Active</Tab>
          <Tab _focus={{ outline: "none" }}>Completed</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                text={todo.text}
                isCompleted={todo.isCompleted}
                removeTodo={() => removeTodo(todo.id)}
                completeTodo={() => completeTodo(todo.id, todo.isCompleted)}
              />
            ))}
          </TabPanel>
          <TabPanel>
            {pending.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                text={todo.text}
                isCompleted={todo.isCompleted}
                removeTodo={() => removeTodo(todo.id)}
                completeTodo={() => completeTodo(todo.id, todo.isCompleted)}
              />
            ))}
          </TabPanel>
          <TabPanel>
            {done.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                text={todo.text}
                isCompleted={todo.isCompleted}
                removeTodo={() => removeTodo(todo.id)}
                completeTodo={() => completeTodo(todo.id, todo.isCompleted)}
              />
            ))}
            <Flex justifyContent="flex-end">
              <Button
                _focus={{ outline: "none" }}
                size="md"
                mt={4}
                variantColor="red"
                onClick={() => removeAllTodos()}
              >
                Delete all
              </Button>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
export default TodoList;
