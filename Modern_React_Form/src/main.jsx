import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SuccessPage from './SuccessPage.jsx'
import { AnimatePresence } from 'framer-motion'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/success', element: <SuccessPage /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimatePresence mode='wait'>
    <RouterProvider router={router} />
  </AnimatePresence>,
)
