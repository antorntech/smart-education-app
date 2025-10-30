import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Routine from "../pages/Routine";
import Progress from "../pages/Progress";
import Settings from "../pages/Settings";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/routine" element={<Routine />} />
    <Route path="/progress" element={<Progress />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

export default AppRoutes;
