import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Routes";
import { ThemeProvider } from "./providers/theme-provider";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <Toaster richColors closeButton position="bottom-right" />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
