import React from 'react';
import App from './components/AuthenticationMicroFrontend.jsx';
import { BrowserRouter as Router } from 'react-router-dom'; 

import './index.css';
import { createRoot } from 'react-dom/client';

// Use createRoot to render the app
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
