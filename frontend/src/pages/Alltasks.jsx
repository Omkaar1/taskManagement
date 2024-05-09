import React, { useState } from "react";
import Cards from "../components/home/Cards";
import { IoAddCircleSharp } from "react-icons/io5";
import InputData from "../components/home/InputData";
const Alltasks = () => {
  const [Inputdiv, setInputdiv] = useState("hidden");
  return (
    <>
      <div>
        <div className="w-full px-4 py-2 flex justify-end" title="Add New Task">
          <button onClick={() => setInputdiv("fixed")}>
            <IoAddCircleSharp className="text-4xl text-gray-400 hover:scale-105 hover:text-gray-100 cursor-pointer transition-all duration-300" />
          </button>
        </div>
        <Cards home={true} setInputdiv={setInputdiv} />
      </div>
      <InputData Inputdiv={Inputdiv} setInputdiv={setInputdiv} />
    </>
  );
};

export default Alltasks;
