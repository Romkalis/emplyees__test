import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {store} from "./store/store.jsx";
import {Provider} from "react-redux";

import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes.jsx";

import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
)
