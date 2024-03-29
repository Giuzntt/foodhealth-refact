import HomePage from "@/pages";
import React from "react";
import { Route, Routes } from "react-router-dom";

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesApp;
