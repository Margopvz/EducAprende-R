// import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token"); // se obtiene el token del localStorage
  console.log("protegida ", token)

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
