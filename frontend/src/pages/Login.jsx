import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="mb-3 text-2xl font-semibold">LogIn</div>
        <input
          type="username"
          placeholder="username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded outline-none"
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded outline-none"
        />
        <div className="w-full flex items-center justify-between">
          <button className="bg-blue-400 px-3 py-2 font-semibold text-black rounded">
            Log in
          </button>
          <Link to="/signup" className="text-gray-400 hover:text-gray-200">
            Not having an account? SignUp here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
