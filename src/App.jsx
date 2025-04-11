
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { ThemeProvider } from "./ThemeContext";
import './main.css'
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);
