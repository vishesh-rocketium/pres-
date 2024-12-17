{/* @ts-ignore */}
import React from "react";
{/* @ts-ignore */}
import ReactDOM from "react-dom/client";
import App from "./App";

// Get the root element
const rootElement = document.getElementById("root")!;

// Create the root for React 18
{/* @ts-ignore */}
const root = ReactDOM.createRoot(rootElement);

{/* @ts-ignore */}
root.render(
  // @ts-ignore
  <React.StrictMode>
    {/* @ts-ignore */}
    <App />
  </React.StrictMode>
);
