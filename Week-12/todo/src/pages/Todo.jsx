import React, { useState, useEffect, useRef } from "react";
import todoListData from "../mock_data/data";
import Tooltip from "../components/tooltip/Tooltip";

const Todo = () => {
  const bgColor = [
    "#000",
    "tomato",
    "dodgerblue",
    "#a8ff50",
    "#61edff",
    "#fcff4f",
  ];

  const titleRef = useRef(null);
  const itemRef = useRef(null);
  const wrapperRef = useRef(null);

  const [data, setData] = useState(todoListData);
  const [todoList, setTodoList] = useState({
    _id: data[data.length - 1]._id + 1,
    title: "",
    items: [],
    backgroundColor: "",
  });
  const [showInput, setShowInput] = useState(false);

  // close and add list on clicking outside
  useEffect(() => {
    function clickHandler(e) {
      if (!wrapperRef.current.contains(e.target)) {
        addTodoHandler();
        setShowInput(false);
      }
    }
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // Adding list item upon clicking enter
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode === 13) {
        addItemToListHandler();
      }
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  function addItemToListHandler() {
    if (itemRef.current.value) {
      setTodoList({
        title: todoList.title,
        _id: todoList._id,
        items: [
          ...todoList.items,
          { name: itemRef.current.value, done: false },
        ],
      });
      itemRef.current.value = "";
    }
  }

  function addTodoHandler() {
    if (todoList.items.length > 0) {
      setData([
        ...data,
        {
          ...todoList,
        },
      ]);
      titleRef.current.value = "";
    }
    setShowInput(true);
    setTodoList({
      _id: data[data.length - 1]._id + 1,
      items: [],
      title: "",
    });
  }

  return (
    <div className="w-full h-full overflow-hidden mx-auto">
      {!showInput ? (
        <div className="input_wrapper h-[105px] border-b-[0px] border-[#e7e7e7] border-solid mt-[20px] grid place-items-center">
          <input
            className="shadow-[0_5px_10px_5px_rgba(0,0,4,0.1)] border-0 rounded-[10px] py-[13px] px-[15px] text-gray-700 font-[600] text-base leading-tight focus:outline-none focus:shadow-outline w-[570px]"
            id="text"
            type="text"
            placeholder="Create a todo..."
            onFocus={(e) => {
              setShowInput(true);
            }}
          />
        </div>
      ) : (
        // Head input
        <div className="grid place-items-center">
          <div
            ref={wrapperRef}
            className="py-[5px] grid grid-rows-[45px_45px_1fr_60px] w-[560px] min-h-0 overflow-hidden border-0 rounded-[8px] z-10 bg-white  mt-[30px] shadow-[0_5px_10px_5px_rgba(0,0,0,0.1)]"
          >
            <div className="grid grid-cols-[1fr_0px] border-b-[1px] border-[#cecece] ">
              <input
                ref={titleRef}
                className="shadow-0 py-[13px] px-[15px] text-gray-700 font-[600] text-base leading-tight focus:outline-none focus:shadow-outline w-full"
                id="title"
                type="text"
                placeholder="Title"
                onChange={(e) => {
                  setTodoList({
                    _id: todoList._id,
                    items: [...todoList.items],
                    title: e.target.value,
                  });
                }}
              />
              {titleRef.current?.value && (
                <i
                  className="fa-solid fa-xmark relative -left-[35px] top-[15px] cursor-pointer text-[tomato] text-medium"
                  onClick={() => {
                    titleRef.current.value = "";
                  }}
                ></i>
              )}
            </div>

            <div className="grid grid-cols-[1fr_0px]">
              <input
                ref={itemRef}
                className="shadow-0 border-b-[1px] border-[#cecece]  py-[13px] px-[15px] text-gray-700 font-[600] text-base leading-tight focus:outline-none focus:shadow-outline w-full"
                id="itemName"
                type="text"
                placeholder="List item"
              />
              <i
                className="fa-solid fa-plus relative -left-[35px] top-[15px] cursor-pointer text-[dodgerblue] text-medium"
                onClick={addItemToListHandler}
              ></i>
            </div>
            <div
              className={`list_data py-[${
                todoList.items.length === 0 ? "0px" : "7px"
              }] min-h-0`}
            >
              {todoList.items.length > 0 &&
                todoList.items.map((item, index) => {
                  return (
                    <li className="flex items-center px-[10px]" key={index}>
                      <input
                        type="checkbox"
                        className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                      />
                      <span className="font-medium text-slate-800 peer-checked:line-through ml-2">
                        {item.name}
                      </span>
                    </li>
                  );
                })}
            </div>
            <div
              className="bg-primary text-[17px] font-[700] py-[7px] px-[10px] h-[40px] w-[200px] mx-auto mt-[15px] text-center rounded text-white cursor-pointer"
              onClick={addTodoHandler}
            >
              Add list
            </div>
          </div>
        </div>
      )}

      {/* All todo lists */}
      <div className="mt-[50px] mb-[100px] grid grid-cols-3 gap-[25px] max-w-[900px] mx-auto">
        {data.map((ele, index) => {
          return (
            <div
              className="w-full border-[0px] border-solid border-[rgb(218,218,218)] rounded-md py-[10px] px-[17px] shadow-[0px_0px_3px_4px_rgba(165,165,165,0.1)]"
              key={index}
            >
              <h5 className="text-[22px] font-semibold capitalize">
                {ele.title}
              </h5>
              <ul className="mt-[8px] text-[17px]">
                {ele.items.map((item, index) => {
                  return (
                    <li className="flex items-center">
                      <input
                        type="checkbox"
                        className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-primary rounded-full"
                      />
                      <span className="font-medium text-slate-800 peer-checked:line-through ml-2">
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
              {/* color grid */}
              <div className="w-[90px] color_pallete grid grid-cols-3 my-[20px]">
                {bgColor.map((color, index) => {
                  return (
                    <div
                      className={{
                        backgroundColor: color,
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                      key={index}
                    ></div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
