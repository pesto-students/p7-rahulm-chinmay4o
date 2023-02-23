import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Hooks from "./pages/Hooks";
import Navbar from "./components/navbar/navbar";
import Todo from "./pages/Todo.jsx";

function App() {
  return (
    <>
      <Navbar />

      <div className="parent_container">
        <div className="layout_container">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* custom hooks practice */}
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
