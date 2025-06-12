import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import TimeLGame from './components/TimeLGame/TimeLGame.jsx'
import Index from './pages/Index.jsx'
import Categories from './pages/Categories.jsx'
import CategoryRouter from './components/CategoryRouter.jsx'
import About from './pages/About/About.jsx'
import Login from './Pages/Login.jsx'
import Layout from './pages/Layout.jsx'


// en la constante router queda defino el enrutador
// crea el entutador
export const router = createBrowserRouter(
    // crea las rutas
    createRoutesFromElements(
        // un componente "Route" por cada ruta
        // un ruta que envuelve a otra rutas --> LAYOUT
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/categorias/:asignatura" element={<CategoryRouter />} />
            <Route path="/juegos/timelgame" element={<TimeLGame />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
        </Route>
    )
)