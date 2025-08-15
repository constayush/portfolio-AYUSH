
import ErrorPage from "./components/pages/errorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Terminal from "./components/pages/Terminal";
import Hero from "./components/pages/Hero";
import DinoGame from "./components/pages/Dino";
import ScrollToTop from "../utils/ScrollToTop";
import Slices from './components/pages/Slices';
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