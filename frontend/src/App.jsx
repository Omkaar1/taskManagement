import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alltasks from "./pages/Alltasks";
import Importanttasks from "./pages/Importanttasks";
import Incompletedtasks from "./pages/Incompletedtasks";
import Completedtasks from "./pages/Completedtasks";

const App = () => {
  return (
    <div className="bg-gray-900 text-white p-2 h-screen">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<Alltasks />} />
            <Route path="imptask" element={<Importanttasks />} />
            <Route path="comptask" element={<Completedtasks />} />
            <Route path="incomptask" element={<Incompletedtasks />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
