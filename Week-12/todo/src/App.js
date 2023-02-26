import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
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
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
