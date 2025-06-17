import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider} from 'react-router-dom'
import  AuthProvider  from "./context/AuthContext";
import { router } from './routes'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
    <AuthProvider></AuthProvider>
  </RouterProvider>
)
