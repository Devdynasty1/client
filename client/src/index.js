import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CryptoContext from "./Components/CryptoContext"
import 'react-alice-carousel/lib/alice-carousel.css';
import { GlobalProvider } from './Components/globalcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CryptoContext>
    <GlobalProvider>
     <App/>
    </GlobalProvider>
    </CryptoContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
