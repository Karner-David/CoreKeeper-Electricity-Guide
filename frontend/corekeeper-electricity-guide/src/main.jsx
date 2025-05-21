import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { Amplify } from 'aws-amplify';
import awsExports from '../../../backend/src/aws-exports.js';
import { ThemeProvider, defaultTheme } from '@aws-amplify/ui-react';

import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

Amplify.configure(awsExports);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <App />

      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
