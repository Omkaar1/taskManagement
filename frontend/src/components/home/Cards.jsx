import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaArrowTurnUp } from "react-icons/fa6";

const Cards = () => {
  const data = [
    {
      title: "Task 1",
      description: "This is the description for Task 1.",
    },
    {
      title: "Task 2",
      description: "This is the description for Task 2.",
    },
    {
      title: "Task 3",
      description:
        "This is the description for Task 3.This is the description for Task 3.",
    },
    {
      title: "Task 4",
      description: "This is the description for Task 4s.",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map((items, i) => (
        <div className="flex flex-col justify-between bg-gray-500 rounded-sm p-4">
          <div>
            <h2 className="text-xl font-semibold">{items.title}</h2>
            <p className="text-gray-300 my-2">{items.description}</p>
          </div>
          <div className="mt-4 w-full flex items-center">
            <button className="bg-red-400 p-2 rounded w-3/6">
              Incompleted
            </button>
            <div className="text-white w-3/6 text-2xl flex justify-around">
              <button>
                <FaRegHeart />
              </button>
              <button>
                <FaEdit />
              </button>
              <button>
                <FaArrowTurnUp />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;