import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Index/Header.jsx'
import Main from './components/Index/main.jsx'
import TextoPro from './components/Index/TextoPro.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
//import {RouterProvider} from 'react-router-dom'
//import { router } from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bodyContent' >
      <NavBar/>
      <Header/>
      <Main/>
      <TextoPro/>
      <Footer/>
    </div>
    
  </StrictMode>,
)
