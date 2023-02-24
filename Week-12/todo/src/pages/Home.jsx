import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="grid h-[500px] place-items-center">
      <h1 className="text-[30px] font-[700]">Home to record your notes</h1>

      <button
        onClick={() => navigate("/todo")}
        className="w-[200px] rounded-md bg-primary text-white p-[10px_20px] text-medium font-semibold"
      >
        Create to-do
      </button>
    </div>
  );
};

export default Home;
