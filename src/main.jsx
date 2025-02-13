import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import * as atatus from 'atatus-spa';
atatus.config('0d8df3ece8c04f7baa26f6a4ac01e484').install();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
