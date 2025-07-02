import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/app/app";
import './index.css';


const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);