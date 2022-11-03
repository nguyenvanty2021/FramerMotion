import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppV10 from "./AppV10";
import AppV11 from "./AppV11";
import AppV12 from "./AppV12";
import AppV2 from "./AppV2";
import AppV3 from "./AppV3";
import AppV4 from "./AppV4";
import AppV5 from "./AppV5";
import AppV6 from "./AppV6";
import AppV7 from "./AppV7";
import AppV8 from "./AppV8";
import { AppV9 } from "./AppV9";

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
        <Route path="/v8" element={<AppV9 />}></Route>
        <Route path="/v9" element={<AppV10 />}></Route>
        <Route path="/v10" element={<AppV11 />}></Route>
        <Route path="/v11" element={<AppV12 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
