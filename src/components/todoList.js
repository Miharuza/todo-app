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
  Flex
} from "@chakra-ui/core";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isComplete: false },
    { text: "Meet friend for lunch", isComplete: true },
    { text: "Build really cool todo app", isComplete: false },
    { text: "Programming", isComplete: false }
  ]);
  return (
    <>
      <Tabs maxW="500px" mx="auto">
        <TabList mb={4}>
          <Tab _focus={{ outline: "none" }}>All</Tab>
          <Tab _focus={{ outline: "none" }}>Active</Tab>
          <Tab _focus={{ outline: "none" }}>Completed</Tab>
        </TabList>
        <Stack isInline mb={4}>
          <Input size="md" placeholder="kaj ma" />
          <Button size="md" variantColor="blue" _focus={{ outline: "none" }}>
            Add
          </Button>
        </Stack>
        <TabPanels>
          <TabPanel>
            <Stack>
              {todos.map((todo, index) => (
                <Checkbox
                  key={index}
                  isChecked={todo.isComplete}
                  onChange={() => {}}
                >
                  {todo.text}
                </Checkbox>
              ))}
            </Stack>
          </TabPanel>
          <TabPanel>something else</TabPanel>
          <TabPanel>
            <Flex justifyContent="flex-end">
              <Button _focus={{ outline: "none" }} size="md" variantColor="red">
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
