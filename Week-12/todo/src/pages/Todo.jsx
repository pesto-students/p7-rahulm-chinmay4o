import React, { useState, useEffect, useRef } from "react";
import todoListData from "../mock_data/data";

import TodoList from "../components/todo/TodoList";
import InputBar from "../components/todo/InputBar";

const Todo = () => {
  const bgColor = [
    "#FF845B",
    "#BEFF4E",
    "#4EB9FF",
    "#FFEC4E",
    "#FFFFF  data={data}",
  ];

  const [data, setData] = useState(todoListData);

  // grand parent color handler
  const parentColorHandler = (e, color) => {
    const childNode = e.target;
    const parentNode = childNode.parentNode.parentNode;
    parentNode.style.backgroundColor = color;
  };

  return (
    <div className="w-full h-full overflow-hidden mx-auto">
      {/* Input Bar */}
      <InputBar data={data} setData={setData} />
      {/* All todo lists */}
      <TodoList
        data={data}
        bgColor={bgColor}
        parentColorHandler={parentColorHandler}
      />
    </div>
  );
};

export default Todo;
