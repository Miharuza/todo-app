import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Input,
  Stack,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex
} from "@chakra-ui/core";

const TodoList = () => {
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
            <Checkbox>programming</Checkbox>
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
