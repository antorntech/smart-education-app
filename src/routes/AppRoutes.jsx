import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Routine from "../pages/Routine";
import Progress from "../pages/Progress";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/routine" element={<Routine />} />
    <Route path="/progress" element={<Progress />} />
  </Routes>
);

export default AppRoutes;
