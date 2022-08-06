import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './components/routes/Rotas';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  </React.StrictMode>
    
);


reportWebVitals();
