import { useEffect } from 'react';
import './About.css'
import { EffectDeveloper } from './About';

function About() {
      useEffect(() => {
          EffectDeveloper();
      }, []);
  return (
    <>
  <header className="container-fluid">
    <h2 className="text-center my-4">Nosotros</h2>
  </header>
  <main className="container-fluid">
    <div className="container-fluid row developers-box display-flex p-0 m-0">
      <div className="developers-container col-md-12 col-lg-8">
        <div className="developer-person fernanda col-2">
          <img
            src="./src/assets/img/Feña.png"
            className="developer-img"
            alt="Fernanda"
          />
        </div>
        <div className="developer-person diego col-2">
          <img
            src="./src/assets/img//Diego.png"
            className="developer-img"
            alt="Diego"
          />
        </div>
        <div className="developer-person gonzalo col-2">
          <img
            src="./src/assets/img//Gonza.png"
            className="developer-img"
            alt="Gonza"
          />
        </div>
        <div className="developer-person felipe col-2">
          <img
            src="./src/assets/img//Pipe.png"
            className="developer-img"
            alt="Pipe"
          />
        </div>
        <div className="developer-person margarita col-2">
          <img
            src="./src/assets/img/Margo.png"
            className="developer-img"
            alt="Margarita"
          />
        </div>
      </div>
      <div className="col-md-12 col-lg-4 align-self-center info-developers">
        <h2 className="text-center my-4" id="nameAbout">
          ¿Quienes somos?
        </h2>
        <div className="container about-details">
          <p className="p-4" id="detailAbout">
            Somos un grupo de estudiantes comprometidos con el Objetivo de
            Desarrollo Sostenible de Educación de Calidad. Nuestro proyecto,
            llamado EducAprende, está dirigido a niños y niñas de quinto y sexto
            básico, y busca apoyar su aprendizaje de forma divertida y
            accesible. Hemos creado una aplicación educativa que incluye juegos
            para cada una de las materias principales: Lenguaje, Historia y
            Geografía, Ciencias Naturales, Matemáticas e Inglés. Con EducAprende
            queremos que los estudiantes se mantengan motivados y entretenidos
            con la materia, combinando el juego con el aprendizaje para que
            estudiar sea una experiencia más dinámica y significativa.
          </p>
        </div>
      </div>
    </div>
  </main>
</>

  )
}

export default About