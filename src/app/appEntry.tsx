import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./providers/router/router.tsx";
import { RouterProvider } from "react-router";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./providers/store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
