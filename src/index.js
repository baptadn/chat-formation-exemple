import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Chat from "./components/Chat";

import "./app.css";
import { AppProvider } from "./contexts/app-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import { IntlProvider } from "react-intl";

const queryClient = new QueryClient();
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppProvider>
        <Login />
      </AppProvider>
    ),
  },
  {
    path: "/chat",
    element: (
      <AppProvider>
        <Chat />
      </AppProvider>
    ),
  },
]);

const messagesFr = {
  login: "Hello Back",
};

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <IntlProvider messages={messagesFr} locale="fr" defaultLocale="en">
        <RouterProvider router={router} />
      </IntlProvider>
    </QueryClientProvider>
  </StrictMode>
);
