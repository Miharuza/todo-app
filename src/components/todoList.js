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
  Checkbox,
  Flex,
  IconButton,
} from "@chakra-ui/core";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false },
    { text: "Programming", isCompleted: false },
  ]);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const removeAllTodos = () => {
    const newTodos = [...done, ...pending];
    newTodos.splice(0, done.length);
    setTodos(newTodos);
  };

  let done = todos.filter((todo) => todo.isCompleted === true);
  let pending = todos.filter((todo) => todo.isCompleted === false);

  return (
    <>
      <Tabs maxW="500px" mx="auto">
        <TabList mb={4}>
          <Tab _focus={{ outline: "none" }}>All</Tab>
          <Tab _focus={{ outline: "none" }}>Active</Tab>
          <Tab _focus={{ outline: "none" }}>Completed</Tab>
        </TabList>
        <Stack isInline mb={4} as="form" onSubmit={handleSubmit}>
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
        <TabPanels>
          <TabPanel>
            {todos.map((todo, index) => (
              <Stack isInline justify="space-between">
                <Checkbox
                  key={index}
                  isChecked={todo.isCompleted}
                  onChange={() => completeTodo(index)}
                  textDecoration={todo.isCompleted ? "line-through" : null}
                >
                  {todo.text}
                </Checkbox>
                <IconButton
                  icon="delete"
                  size="xs"
                  variant="ghost"
                  variantColor="red"
                  onClick={() => removeTodo(index)}
                />
              </Stack>
            ))}
          </TabPanel>
          <TabPanel>
            {pending.map((todo, index) => (
              <Stack isInline justify="space-between">
                <Checkbox
                  key={index}
                  isChecked={todo.isCompleted}
                  onChange={() => completeTodo(index)}
                  textDecoration={todo.isCompleted ? "line-through" : null}
                >
                  {todo.text}
                </Checkbox>
                <IconButton
                  icon="delete"
                  size="xs"
                  variant="ghost"
                  variantColor="red"
                  onClick={() => removeTodo(index)}
                />
              </Stack>
            ))}
          </TabPanel>
          <TabPanel>
            {done.map((todo, index) => (
              <Stack isInline justify="space-between">
                <Checkbox
                  key={index}
                  isChecked={todo.isCompleted}
                  onChange={() => completeTodo(index)}
                  textDecoration={todo.isCompleted ? "line-through" : null}
                >
                  {todo.text}
                </Checkbox>
                <IconButton
                  icon="delete"
                  size="xs"
                  variant="ghost"
                  variantColor="red"
                  onClick={() => removeTodo(index)}
                />
              </Stack>
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
