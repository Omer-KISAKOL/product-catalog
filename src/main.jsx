import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from "./styles/GlobalStyle.js";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
)
