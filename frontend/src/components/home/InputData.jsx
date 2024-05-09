import React from "react";
import { RxCross2 } from "react-icons/rx";
const InputData = ({ Inputdiv, setInputdiv }) => {
  return (
    <>
      <div
        className={`${Inputdiv} top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}
      ></div>
      <div
        className={`${Inputdiv} top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="w-2/6 bg-gray-900 p-4 rounded">
          <div className="w-full px-4 py-2 flex justify-end">
            <button onClick={() => setInputdiv("hidden")}>
              <RxCross2 className="text-2xl text-red-400 hover:scale-105 hover:text-red-400 cursor-pointer transition-all duration-300" />
            </button>
          </div>
          <input
            type="text"
            placeholder=" Title"
            name="title"
            className="px-3 py-2 rounded w-full bg-gray-700 outline-none"
          />
          <textarea
            placeholder="Description..."
            cols="30"
            rows="10"
            name="desc"
            className="px-3 py2 rounded w-full bg-gray-700 my-3 outline-none"
          ></textarea>
          <button className="px-2 py-1 bg-blue-400 rounded text-black text-2xl font-semibold">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
