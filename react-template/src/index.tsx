import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// function App(): JSX.Element {
//   return <h1 className="text-3xl text-center text-blue-400">Welcome</h1>;
// }

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Navbar />
    </BrowserRouter>
  </React.StrictMode>
);
