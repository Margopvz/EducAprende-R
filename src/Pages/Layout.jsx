import NavBar from "../components/NavBar/NavBar.jsx";
import Footer from "../components/Footer/Footer.jsx";
// importamos en componente Outlet desde React Router DOM
import { Outlet } from "react-router-dom";

// Outlet


function Layout() {

  return (
    <div className="bodyContent">
        <NavBar />
        {/* OUTLET RECIBE TODOS LO HIJOS QUE SE HAYAN DEFINIDO EN EL ROUTER */}
        <Outlet />
        <Footer />
    </div>
  );
}


export default Layout;