import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/dm-sans";
import "./index.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";



import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);