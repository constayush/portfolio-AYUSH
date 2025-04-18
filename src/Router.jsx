import React from 'react'
import ErrorPage from "./components/errorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Terminal from "./components/Terminal";
import Hero from "./components/Hero";
import DinoGame from "./components/Dino";
import Gists from './components/Gists';
import GistSingle from './components/GistSingle';
function Router() {
  return (
    <BrowserRouter>

    <Routes>
       <Route path="/" element={<><Hero /></>} />
       <Route path="/gists" element={<><Gists /></>} />
       <Route path="/gists/:id" element={<><GistSingle /></>} />
       <Route path="/terminal" element={<><Terminal /></>} />
       <Route path="/orange-rollllllllling" element={<><DinoGame /></>} />
       <Route path="/*" element={<ErrorPage />} />
    </Routes>
 </BrowserRouter>
  )
}

export default Router