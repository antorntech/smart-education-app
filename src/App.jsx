// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import AppRoutes from "./routes/AppRoutes";

const App = () => (
  <Routes>
    <Route path="/*" element={<AppLayout />}>
      <Route path="*" element={<AppRoutes />} />
    </Route>
  </Routes>
);

export default App;
