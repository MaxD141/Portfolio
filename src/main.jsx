import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Global.css";
import App from "./App";

// This is the entry point — it finds the <div id="root"> in public/index.html
// and mounts the entire React app inside it.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);