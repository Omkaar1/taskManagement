import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [Data, setData] = useState({ username: "", email: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submitFn = async () => {
    if (Data.username === "" || Data.email === "" || Data.password === "") {
      alert("All fields are required");
    } else {
      const response = await axios.post(
        "http:localhost:8080/api/v1/sign-in",
        Data
      );
      console.log(response);
    }
  };
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="mb-3 text-2xl font-semibold">Signup</div>
        <input
          type="text"
          placeholder="username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded outline-none"
          value={Data.username}
          onChange={change}
          name="username"
        />
        <input
          type="email"
          placeholder="email"
          className="bg-gray-700 px-3 py-2  w-full rounded outline-none"
          value={Data.email}
          onChange={change}
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded outline-none"
          value={Data.password}
          onChange={change}
          name="password"
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-400 px-3 py-2 font-semibold text-black rounded"
            onClick={submitFn}
          >
            Sign up
          </button>
          <Link to="/login" className="text-gray-400 hover:text-gray-200">
            Already have an account? Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
