import ErrorPage from "./components/pages/errorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Terminal from "./components/pages/Terminal";
import Hero from "./components/pages/Hero";
import DinoGame from "./components/pages/Dino";
import ScrollToTop from "../utils/ScrollToTop";
import Slices from "./components/pages/Slices";
import Introduction from "./components/slices_components/slices_pages/Introduction";
import Gallery from "./components/slices_components/slices_pages/Gallery";

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        
        {/* parent route */}
        <Route path="/slices" element={<Slices />}>
          {/* nested routes */}
          <Route path="introduction" element={<Introduction />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>

        <Route path="/terminal" element={<Terminal />} />
        <Route path="/orange-rollllllllling" element={<DinoGame />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
