import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import TimeLGame from './components/TimeLGame/TimeLGame.jsx'
import Index from './Pages/Index.jsx'
import Layout from './Pages/Layout.jsx'
// en la constante router queda defino el enrutador
// crea el entutador
export const router = createBrowserRouter(
    // crea las rutas
    createRoutesFromElements(
        // un componente "Route" por cada ruta
        // un ruta que envuelve a otra rutas --> LAYOUT
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/juegos/timelgame" element={<TimeLGame />} />
        </Route>
    )
)