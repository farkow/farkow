import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { setLocale, isLocale, cookieName } from "./paraglide/runtime.js";

// Auto-detect browser language on first visit only.
// If the user has already chosen a locale (stored in cookie), respect it.
function detectLocale(): void {
  const hasExistingLocale = document.cookie
    .split("; ")
    .some((c) => c.startsWith(`${cookieName}=`));
  if (hasExistingLocale) {
    return; // locale will be resolved from the cookie by paraglide
  }
  const browserLang = navigator.language?.split("-")[0] || "en";
  if (isLocale(browserLang)) {
    setLocale(browserLang, { reload: false });
  }
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
