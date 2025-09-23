import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
// import store from "./store/index.ts";
import Bai2 from "./Bai2.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Bai2></Bai2>
    </Provider>
  </StrictMode>
);
