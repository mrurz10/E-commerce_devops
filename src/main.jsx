import React from 'react'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './stores/context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <CartProvider>
       <App />
    </CartProvider>
   
  </React.StrictMode>,
  </BrowserRouter>
)
