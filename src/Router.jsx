import React from 'react'
import ErrorPage from "./components/errorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Terminal from "./components/Terminal";
import Hero from "./components/Hero";
import DinoGame from "./components/Dino";
import ScrollToTop from "../utils/ScrollToTop";
import Slices from './components/Slices';
function Router() {
  return (
    <BrowserRouter>
  <ScrollToTop />
    <Routes>
       <Route path="/" element={<><Hero /></>} />
       <Route path="/slices" element={<><Slices /></>} />
       <Route path="/terminal" element={<><Terminal /></>} />
       <Route path="/orange-rollllllllling" element={<><DinoGame /></>} />
       <Route path="/*" element={<ErrorPage />} />
    </Routes>
 </BrowserRouter>
  )
}

export default Router