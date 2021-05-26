import React from "react";
import "./index.css";
import { CheckProvider } from "./interview/CheckProvider";
import { CheckBook } from "./interview/CheckBook";

function App() {
  return (
    <React.StrictMode>
      <CheckProvider>
        <CheckBook />
      </CheckProvider>
    </React.StrictMode>
  );
}

export default App;
