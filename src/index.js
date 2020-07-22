import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset, Box, Heading } from "@chakra-ui/core";
import TodoList from "./components/todoList";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box padding={4}>
        <Heading mb={8} textAlign="center">
          #kvajtrebanarest
        </Heading>
        <TodoList />
      </Box>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
