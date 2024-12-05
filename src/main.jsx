import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import {CartProvider } from "./Component/Other/Citems.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-zv46l5vldz2yfhz5.us.auth0.com"
    clientId="k2RlFMynvuDmDdWzakiHVmgjgbBcrN1o"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

<CartProvider> 

  <BrowserRouter>
   <App />
  </BrowserRouter>
  </CartProvider> 
  </Auth0Provider>

)
