import { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';



const Register = () => {
  const { register, handleSubmit, reset, watch, formState: { errors }} = useForm();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data) => {
    const payload = {
    ...data,
    name: data.newUser.trim(),
    email: data.newEmail.trim().toLowerCase(),
    password: data.newPassword
    };

    console.log(payload)
  

    try {
      const response = await fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
          setSuccessMessage('✅ ¡Registro exitoso! Serás redirigida al login...');
          reset(); // limpia el formulario

          // redirige después de 2 segundos
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          alert(result.message || '❌ Error al registrar');
        }
    } catch (error) {
      console.error(error);
      alert('❌ Error de conexión');
    }
  }

  const password = watch('newPassword');

  return (
  <>
    <div className="container mt-4 d-none">
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
    </div>
<div className='row register-container'>
  <div className="register-card col-11 col-lg-4 col-md-7 col-sm-9">
    <h2 className="register-title">Crear cuenta</h2>
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" id='newUser' placeholder="Nombre de usuario" 
        {...register('newUser', {required: 'Este campo es obligatorio',
        pattern: {
        value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+ [A-Za-zÁÉÍÓÚáéíóúÑñ]+$/,
        message: 'Debes ingresar exactamente dos nombres (sin números ni símbolos)'
        }
        })}/>
        {errors.newUser && <p className='text-danger'>{errors.newUser.message}</p>}
        <input  id='newEmail' placeholder="Correo electrónico" 
        {...register('newEmail', {required: 'Este campo es obligatorio',  
        pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: 'Formato de correo no válido'
        }})}/>
        {errors.newEmail && <p className='text-danger'>{errors.newEmail.message}</p>}
        <input type="password" id='newPassword' placeholder="Contraseña" 
        {...register('newPassword', {
          required: 'Este campo es obligatorio',
          minLength: {
            value: 6,
            message: 'La contraseña debe tener al menos 6 caracteres'
          }})}/>
        {errors.newPassword && <p className='text-danger'>{errors.newPassword.message}</p>}
        <input type="password" id='newPassword2' name='newPassword2' placeholder="Repetir contraseña" 
        {...register('newPassword2', {
          required: 'Repite tu contraseña',
          validate: (value) =>
            value === password || 'Las contraseñas no coinciden'
        })}/>
        {errors.newPassword2 && <p className='text-danger'>{errors.newPassword2.message}</p>}
        <button type="submit">Registrar</button>
    </form>
  </div>
</div>
  </>
  )
  
}


export default Register