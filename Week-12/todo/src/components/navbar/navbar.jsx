import React from "react";
import { useHistory } from "react-router-dom";

const navbar = () => {
  const history = useHistory();

  return (
    <div className="w-full fixed z-20 bg-white">
      <div className="px-6 w-full md:max-w-[1440px] md:h-[58px] h-[52px] mx-auto flex items-center justify-between">
        <div className="flex gap-x-[50px]">
          <div
            className={"flex items-center gap-x-[3px] cursor-pointer "}
            onClick={() => history.push("/events")}
          >
            <img
              src="/logo192.png"
              alt="logo"
              className=" h-[24px] w-[24px] md:h-[35px] md:w-[35px]"
            />
            <p className="text-[20px] md:text-[23px] font-[600] relative">
              Finge Notes
              <span className="inline-flex absolute -right-[28px] -top-[2px] h-[14px] justify-center items-center px-[6px] py-[2px] ml-3 text-[6px] font-medium text-gray-800 bg-gray-200 rounded-[2px] dark:bg-gray-700 dark:text-gray-300">
                Beta
              </span>
            </p>
          </div>
        </div>

        <div
          className={`text-[30px] cursor-pointer visible md:invisible`}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default navbar;
