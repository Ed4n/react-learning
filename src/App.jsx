import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

//pages
import ReactQuery from "./pages/ReactQuery";
import ReactQueryLearning from "./pages/ReactQueryLearning";

export default function HelloWorld() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/react-query" element={<ReactQuery />} />
        <Route path="/react-query-learning" element={<ReactQueryLearning />} />
      </Routes>
    </>
  );
}
