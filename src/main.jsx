import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import Navbar from './Router/MainLayout/Navbar.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Authentication/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={Router}>
        <Navbar></Navbar>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
