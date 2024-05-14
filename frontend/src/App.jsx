import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Alltasks from "./pages/Alltasks";
import Importanttasks from "./pages/Importanttasks";
import Incompletedtasks from "./pages/Incompletedtasks";
import Completedtasks from "./pages/Completedtasks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import { useSelector } from "react-redux";

const App = () => {
  const navigate = useNavigate();
  const isloggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isloggedIn);
  useEffect(() => {
    if (!isloggedIn) {
      navigate("/signup");
    }
  }, []);

  return (
    <div className="bg-gray-900 text-white p-2 h-screen relative">
      {/* <Router> */}
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<Alltasks />} />
          <Route path="/imptask" element={<Importanttasks />} />
          <Route path="/comptask" element={<Completedtasks />} />
          <Route path="/incomptask" element={<Incompletedtasks />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
};

export default App;
