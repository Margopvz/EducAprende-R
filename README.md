# 🎓 EducAprende-R

**EducAprende-R** es una plataforma educativa interactiva creada para estudiantes de quinto y sexto básico. Nuestro objetivo es fomentar el aprendizaje de forma lúdica mediante juegos diseñados para reforzar contenidos clave del currículo escolar.

---

## 🚀 Tecnologías Utilizadas

- **Frontend:** React + Vite + Bootstrap
- **Backend:** Node.js + Express + MongoDB
- **Estado global:** React Context API
- **Autenticación:** JWT + almacenamiento en localStorage

---

## 📁 Estructura del Proyecto

```plaintext
EducAprende-R/
├── backend-api/               # API Node/Express + MongoDB
├── public/                    # Recursos estáticos
└── src/
    ├── components/            # Juegos y elementos reutilizables
    ├── context/               # AuthContext, LogrosContext
    ├── data/                  # Preguntas y datos para los juegos
    ├── pages/                 # Vistas principales enrutadas (index, login, perfil, about, notfound)
    └── main.jsx               # Punto de entrada principal
```

> 📌 En `pages/` se encuentran las vistas principales. Otras funcionalidades están distribuidas en componentes adicionales reutilizables.

---

## 🎮 Juegos Educativos

- **Wordle (Lenguaje):** Palabras aleatorias como verbos y sustantivos. Usa pistas y retroalimentación visual (verde, amarillo, gris). Al acertar, muestra una explicación y ejemplos. Registra el avance del usuario.
  
- **Sopa de Letras (Inglés):** Refuerza vocabulario y comprensión con pistas bilingües y retroalimentación por intentos.

- **Timeline (Historia):** Conecta hechos y fechas históricas mediante columnas. Retroalimentación visual y por niveles.

- **Trivia (Ciencias):** Preguntas con imágenes y alertas que enseñan sobre el sistema solar, seres vivos y más.

- **Operaciones (Matemáticas):** Ejercicios combinados con suma, resta, multiplicación y división, incluyendo resultados negativos. Refuerza el orden de operaciones.

---

## 👤 Registro, Login y Panel de Logros

- Validaciones de campos desde el frontend (React Hook Form).
- Envío al backend con verificación en el controlador.
- Login con JWT y contexto para mantener sesión activa.
- Cada usuario tiene su progreso guardado.
- Vista de perfil muestra sus logros desbloqueados y avance por asignatura.

---

## 🧠 Modelos de Base de Datos (MongoDB)

1. **User**
   - nombre, correo, contraseña (encriptada)
   - progreso: intentos/aciertos por asignatura
   - logros desbloqueados (referencias por ID)

2. **Logros**
   - nombre, descripción, imagen
   - asignatura asociada
   - cantidad de aciertos necesarios

---

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/Margopvz/EducAprende-R.git
cd EducAprende-R
```

### 2. Instalar dependencias del frontend

```bash
npm install
npm run dev
```

### 3. Instalar dependencias y ejecutar el backend

```bash
cd backend-api
npm install
npm run dev
```

> Asegúrate de tener **MongoDB instalado** localmente o usar un servicio como Atlas.

### 4. Crear archivo `.env` en `backend-api/`

```env
SECRET_JWT="tu_firma_secreta"
MONGO_URI="mongodb://localhost:27017/educaprende" # o tu conexión de Atlas
```

---

## 🌐 Uso

Al iniciar el sitio, podrás registrarte, iniciar sesión, jugar y ver tu progreso. Cada acción se registra en la base de datos y se visualiza en el perfil. Los logros se desbloquean dinámicamente según el desempeño del usuario.

---

## 🤝 Contribuciones

¡Bienvenidos aportes al proyecto! Si quieres apoyar la educación de calidad con tecnología, este es tu lugar. Para contribuir, puedes hacer un **fork** del repositorio y proponer tus mejoras.

En la sección **About** del sitio puedes conocernos mejor, entender por qué creamos este proyecto y cómo creemos que se puede aprender jugando.


---

## 📩 Contacto

Equipo EducAprende  
Bootcamp Generation Chile — Cohorte 19  
```
