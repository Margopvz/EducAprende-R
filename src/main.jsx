import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/Footer/Footer.jsx'
import Index from './Pages/Index.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import TimeLGame from './components/TimeLGame/TimeLGame.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider} from 'react-router-dom'
import { router } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >
    </RouterProvider>
  </StrictMode>,
)
