import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./demo";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  );
}

export default App;
