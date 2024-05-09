import React, { useState } from "react";
import { FaRegHeart, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";

const Cards = ({ home, setInputdiv }) => {
  const data = [
    {
      title: "Task 1",
      description: "This is the description for Task 1.",
      status: "Incomplete",
    },
    {
      title: "Task 2",
      description: "This is the description for Task 2.",
      status: "Complete",
    },
    {
      title: "Task 3",
      description:
        "This is the description for Task 3.This is the description for Task 3.",
      status: "Incomplete",
    },
    {
      title: "Task 4",
      description: "This is the description for Task 4s.",
      status: "Complete",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.map((items, i) => (
        <div
          className="flex flex-col justify-between bg-gray-500 rounded-sm p-4"
          key={i}
        >
          <div>
            <h2 className="text-xl font-semibold">{items.title}</h2>
            <p className="text-gray-300 my-2">{items.description}</p>
          </div>
          <div className="mt-4 w-full flex items-center">
            <button
              className={`${
                items.status === "Incomplete" ? "bg-red-400" : "bg-green-400"
              } p-2 rounded w-3/6`}
            >
              {items.status}
            </button>
            <div className="text-white w-3/6 text-2xl flex justify-around">
              <button>
                <FaRegHeart />
              </button>
              <button>
                <FaEdit />
              </button>
              <button>
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
      {home === true && (
        <div className="flex flex-col justify-center items-center bg-gray-500 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300">
          <IoAddCircleSharp
            className="text-5xl"
            onClick={() => setInputdiv("fixed")}
          />
          <h2 className="text-2xl mt-4">Add Task</h2>
        </div>
      )}
    </div>
  );
};

export default Cards;
