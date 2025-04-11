import React from 'react'
import ErrorPage from "./components/errorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Terminal from "./components/Terminal";
import Hero from "./components/Hero";
import DinoGame from "./components/Dino";
function Router() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<><Hero /></>} />
       <Route path="/terminal" element={<><Terminal /></>} />
       <Route path="/orange-rollllllllling" element={<><DinoGame /></>} />
       <Route path="/*" element={<ErrorPage />} />
    </Routes>
 </BrowserRouter>
  )
}

export default Router