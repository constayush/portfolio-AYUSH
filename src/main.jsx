import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./ThemeContext";
import "./main.css";
import "./slices.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
