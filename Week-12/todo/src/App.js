import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Hooks from "./pages/Hooks";
import Todo from "./pages/Todo.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
