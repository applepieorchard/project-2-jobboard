import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Jobs from "./components/JobBoard.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Jobs></Jobs>
    </>
  );
}

export default App;
