import React from "react";

const TodoList = ({ data, bgColor, parentColorHandler }) => {
  return (
    <div className="mt-[50px] mb-[100px] grid grid-cols-3 gap-[25px] max-w-[900px] mx-auto">
      {data.map((ele, index) => {
        return (
          <div
            className="w-full border-[0px] border-solid border-[rgb(218,218,218)] rounded-md py-[10px] px-[17px] shadow-[0px_0px_3px_4px_rgba(165,165,165,0.1)]"
            key={ele._id}
            id={ele._id}
          >
            <h5 className="text-[22px] font-semibold capitalize">
              {ele.title}
            </h5>
            <ul className="mt-[8px] text-[17px]">
              {ele.items.map((item, index) => {
                return (
                  <li className="flex items-center" key={index}>
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
            <div className="w-[140px] color_pallete grid grid-cols-5 my-[20px]">
              {bgColor.map((color, index) => {
                return (
                  <div
                    style={{
                      backgroundColor: color,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                    key={index}
                    onClick={(e) => parentColorHandler(e, color)}
                  ></div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
