import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import {Provider} from "react-redux";
import myStore from "./redux/createStore.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={myStore}>
        <BrowserRouter>
        <Routes>
            <Route path="*" element={ <App /> }>

            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)
