import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

//pages
import ReactQuery from "./pages/ReactQuery/ReactQuery";
import ReactQueryLearning from "./pages/ReactQuery/ReactQueryLearning";
import ReactQueryPractice from "./pages/ReactQuery/ReactQueryPractice";

export default function HelloWorld() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/react-query/react-query" element={<ReactQuery />} />
        <Route
          path="/react-query/react-query-learning"
          element={<ReactQueryLearning />}
        />
        <Route
          path="/react-query/react-query-practice"
          element={<ReactQueryPractice />}
        />
      </Routes>
    </>
  );
}
