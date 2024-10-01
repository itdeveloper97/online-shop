import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { StoreProvider } from "src/store/providers/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <MantineProvider>
        <RouterProvider router={routes} />
      </MantineProvider>
    </StoreProvider>
  );
}

export default App;
