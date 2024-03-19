import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesApp;
