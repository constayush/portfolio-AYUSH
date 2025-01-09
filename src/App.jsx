import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./component/errorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Terminal from "./component/Terminal";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
 <Routes>
    <Route path="/terminal"  element={<><Terminal/></>} />
    <Route path="/"  element={ <><Hero/></>} />
    <Route path="/*"  element={<ErrorPage/>} />
 </Routes>
</BrowserRouter>);