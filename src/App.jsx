import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./components/errorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Terminal from "./components/Terminal";
import Hero from "./components/Hero";
import DinoGame from "./components/Dino";

const root = ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<><Hero /></>} />
         <Route path="/terminal" element={<><Terminal /></>} />
         <Route path="/mini-game" element={<DinoGame />} />
         <Route path="/*" element={<ErrorPage />} />
      </Routes>
   </BrowserRouter>);