import React from "react";
import { CgNotes } from "react-icons/cg";
import { FaCheckDouble } from "react-icons/fa6";
import { MdLabelImportant } from "react-icons/md";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const data = [
    {
      title: "All Tasks",
      icon: <CgNotes />,
      link: "/",
    },
    {
      title: "Important Tasks",
      icon: <MdLabelImportant />,
      link: "/imptask",
    },
    {
      title: "Completed Tasks",
      icon: <FaCheckDouble />,
      link: "/comptask",
    },
    {
      title: "Incompleted Tasks",
      icon: <TbNotebookOff />,
      link: "/incomptask",
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">Task Management</h2>
        <h4 className="mb-1 text-gray-400">email</h4>
        <hr />
      </div>
      <div className="mb-[55vh]">
        {data.map((item, i) => (
          <Link
            to={item.link}
            className="my-2 flex items-center gap-1 p-2 hover:bg-gray-600 rounded transition-all duration-300"
            key={i}
          >
            {item.icon} {item.title}
          </Link>
        ))}
      </div>
      <div>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded w-full"
          onClick={() => alert("work in progress")}
        >
          <span>Log Out</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
