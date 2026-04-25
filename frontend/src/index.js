import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

// SPA routing: restore original URL after 404.html redirect on Cloudflare Pages
(function () {
  const redirect = sessionStorage.getItem('spa-redirect');
  if (redirect && redirect !== '/' && redirect !== window.location.pathname) {
    sessionStorage.removeItem('spa-redirect');
    window.history.replaceState(null, null, redirect);
  }
})();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
