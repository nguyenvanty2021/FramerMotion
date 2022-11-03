import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppV2 from "./AppV2";
import AppV3 from "./AppV3";
import AppV4 from "./AppV4";
import AppV5 from "./AppV5";
import AppV6 from "./AppV6";
import AppV7 from "./AppV7";
import AppV8 from "./AppV8";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppV2 />}></Route>
        <Route path="/v2" element={<AppV3 />}></Route>
        <Route path="/v3" element={<AppV4 />}></Route>
        <Route path="/v4" element={<AppV5 />}></Route>
        <Route path="/v5" element={<AppV6 />}></Route>
        <Route path="/v6" element={<AppV7 />}></Route>
        <Route path="/v7" element={<AppV8 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
