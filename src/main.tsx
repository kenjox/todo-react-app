import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodoContextProvider } from "./TodoContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
