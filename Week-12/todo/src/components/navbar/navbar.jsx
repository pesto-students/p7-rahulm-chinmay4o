import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full z-20 bg-white">
      <div className="px-6 w-full md:max-w-[1340px] md:h-[58px] h-[52px] mx-auto flex items-center justify-between">
        <div className="flex gap-x-[50px]">
          <div
            className={"flex items-center gap-x-[3px] cursor-pointer "}
            onClick={() => navigate("/")}
          >
            <img
              src="/logo192.png"
              alt="logo"
              className=" h-[24px] w-[24px] md:h-[35px] md:w-[35px]"
            />
            <p className="text-[20px] md:text-[23px] font-[700] relative">
              Finge Notes
              <span className="inline-flex absolute -right-[28px] -top-[2px] h-[14px] justify-center items-center px-[6px] py-[2px] ml-3 text-[6px] font-medium text-gray-800 bg-gray-200 rounded-[2px]">
                Beta
              </span>
            </p>
          </div>
        </div>

        <div className="text-[30px] cursor-pointer visible md:invisible">
          <i class="fa-solid fa-bars-staggered"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
