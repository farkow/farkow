import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { setLocale, isLocale } from "./paraglide/runtime.js";

// Auto-detect browser language, defaulting to English
function detectLocale(): void {
  const browserLang = navigator.language?.split("-")[0] || "en";
  if (isLocale(browserLang)) {
    setLocale(browserLang, { reload: false });
  }
  // else: keep default (en)
}

detectLocale();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeInit />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

initThemeMode();
