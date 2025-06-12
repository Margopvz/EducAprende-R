import React from 'react'
import './Login.css'

const Login = () => {
  return (
  <>
  <div className="login-container">
    <h2 className="login-title">Iniciar sesión</h2>
    <form className="login-form">
      <input type="text" placeholder="Nombre de usuario" />
      <input type="password" placeholder="Contraseña" />
      <button type="submit">Entrar</button>
      <div className="login-links">
        <span><a href="/register">¿No tienes cuenta? Regístrate aquí.</a></span>
      </div>
    </form>
  </div>
  </>
  )
}

export default Login