import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import Rotas from './components/routes/Rotas';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Rotas/>
  </BrowserRouter>
);


reportWebVitals();
