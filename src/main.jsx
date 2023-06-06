import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "../src/styles/index.css";

// importacion de react query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// se guarda el query client en una constante (devuelbvve una instancia de query client)
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* se envuelve el app en el query client provider */}

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* Se intance react query dev tools */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
