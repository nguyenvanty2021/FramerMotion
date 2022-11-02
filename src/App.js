import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppV2 from "./AppV2";
import AppV3 from "./AppV3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppV2 />}></Route>
        <Route path="/v2" element={<AppV3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
