import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './styles/main.css';
import { DarkModeProvider } from './DarkMode';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
