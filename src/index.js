import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset, Box, Heading } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box padding={4}>
        <Heading>
          Welcome to{" "}
          <span role="img" aria-label="logo">
            ⚡️
          </span>{" "}
          Chakra UIiii
        </Heading>
      </Box>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
