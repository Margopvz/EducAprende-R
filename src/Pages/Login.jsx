import {useState} from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router";
import './Login.css'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const onSubmit = async (data) => {
    const payload = {
      email: data.email.toLowerCase().trim(),
      password: data.password
    };

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();


      if (response.ok) {
        localStorage.setItem('token', result.token);
        navigate('/perfil'); // Redirige al perfil
      } else {
        setLoginError(result.message || 'Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error de conexión', error);
      setLoginError('Error de conexión con el servidor');
    }
  };

  return (
  <>
  <div className="container mt-4 d-none">
      {loginError && (
        <div className="alert alert-danger" role="alert">
          {loginError}
        </div>
      )}
  </div>
<div className='row login-container'>
  <div className="login-card col-11 col-lg-4 col-md-7 col-sm-9 ">
    <h2 className="login-title">Iniciar sesión</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <input type="text" placeholder="Nombre de usuario" 
      {...register('email', {
            required: 'El correo es obligatorio',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Correo inválido'
            }
          })}
      />
      {errors.email && <div className="text-danger">{errors.email.message}</div>}

      <input type="password" placeholder="Contraseña"
      {...register('password', {
            required: 'La contraseña es obligatoria',
            minLength: {
              value: 6,
              message: 'El formato de contraseña es incorrecto'
            }
          })}
        />
        {errors.password && <div className="text-danger">{errors.password.message}</div>}

      <button type="submit">Entrar</button>
      <div className="login-links">
        <Link to={`/registro`}><span>¿No tienes cuenta? Regístrate aquí.</span></Link>
        
      </div>
    </form>
  </div>
</div>
  </>
  )
}

export default Login