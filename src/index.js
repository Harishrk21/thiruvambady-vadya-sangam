import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

// Clear prerendered HTML so client routing always mounts a fresh React tree
if (container?.hasChildNodes()) {
  container.replaceChildren();
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
