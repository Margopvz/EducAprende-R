import React from 'react'
import './Register.css'

const Register = () => {
  return (
  <>
  <div className="register-container">
    <h2 className="register-title">Crear cuenta</h2>
    <form className="register-form">
        <input type="text" id='newUser' name='newUser' placeholder="Nombre de usuario" />
        <input type="email" id='newEmail' name='newEmail' placeholder="Correo electrónico" />
        <input type="password" id='newPassword' name='newPassword' placeholder="Contraseña" />
        <input type="password" id='newPassword2' name='newPassword2' placeholder="Repetir contraseña" />
        <button type="submit">Registrar</button>
    </form>
  </div>
  </>
  )
}


export default Register