import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { StrictMode } from "react";

createRoot(document.getElementById("wp_article_list")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
