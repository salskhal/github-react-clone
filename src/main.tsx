import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./services/api.service.ts";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
);
