import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
// import './index.css'

import {CallBackHook} from './06-memos/CallbackHook.jsx'
// import  './08-useReducer/intro-reducer.js'
import { TodoApp } from './08-useReducer/TodoApp.jsx'
import { MainApp } from './09-useContext/MainApp.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* <App /> */}
      {/* <CallBackHook /> */}
      {/* <TodoApp /> */}
      <MainApp />
    </StrictMode>
  </BrowserRouter>
)
