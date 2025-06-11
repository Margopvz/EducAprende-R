export function EffectDeveloper(){
    const container = document.querySelector('.developers-container');
    const developers = document.querySelectorAll('.developer-person');

    developers.forEach(developer => {
        developer.addEventListener('mouseenter', () => {
            container.classList.add('developers-hover');
            developer.classList.add('hovered');
            const nameAbout = document.getElementById('nameAbout');
            const detailAbout = document.getElementById('detailAbout');
            // Verifica si tiene la clase con el nombre el desarrollador
            if (developer.classList.contains('fernanda')) {
                nameAbout.innerHTML = 'Fernanda Valenzuela';
                detailAbout.innerHTML = 'Texto descriptivo de Fernanda Valenzuela. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
            } else if (developer.classList.contains('diego')) {
                nameAbout.innerHTML = 'Diego Palma';
                detailAbout.innerHTML = 'Texto descriptivo de Diego Palma. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
            } else if (developer.classList.contains('gonzalo')) {
                nameAbout.innerHTML = 'Gonzalo Montenegro';
                detailAbout.innerHTML = 'Texto descriptivo de Gonzalo Montenegro. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
            } else if (developer.classList.contains('felipe')) {
                nameAbout.innerHTML = 'Felipe Salinas';
                detailAbout.innerHTML = 'Texto descriptivo de Felipe Salinas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
            } else if (developer.classList.contains('margarita')) {
                nameAbout.innerHTML = 'Margarita Pavez';
                detailAbout.innerHTML = 'Texto descriptivo de Margarita Pavez. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
            } else {
                nameAbout.innerHTML = '¿Quienes somos?';
                detailAbout.innerHTML = "Somos un grupo de estudiantes comprometidos con el Objetivo de Desarrollo Sostenible de Educación de Calidad. Nuestro proyecto, llamado EducAprende, está dirigido a niños y niñas de quinto y sexto básico, y busca apoyar su aprendizaje de forma divertida y accesible. Hemos creado una aplicación educativa que incluye juegos para cada una de las materias principales: Lenguaje, Historia y Geografía, Ciencias Naturales, Matemáticas e Inglés.\nCon EducAprende queremos que los estudiantes se mantengan motivados y entretenidos con la materia, combinando el juego con el aprendizaje para que estudiar sea una experiencia más dinámica y significativa.";
            }
        });

        developer.addEventListener('mouseleave', () => {
            container.classList.remove('developers-hover');
            developer.classList.remove('hovered');
            const nameAbout = document.getElementById('nameAbout');
            const detailAbout = document.getElementById('detailAbout');
            // Cambia el texto de nameAbout a "¿Quienes somos?"
            nameAbout.innerHTML = '¿Quienes somos?';
            // devuelve el texto de detailAbout
            detailAbout.innerHTML = "Somos un grupo de estudiantes comprometidos con el Objetivo de Desarrollo Sostenible de Educación de Calidad. Nuestro proyecto, llamado EducAprende, está dirigido a niños y niñas de quinto y sexto básico, y busca apoyar su aprendizaje de forma divertida y accesible. Hemos creado una aplicación educativa que incluye juegos para cada una de las materias principales: Lenguaje, Historia y Geografía, Ciencias Naturales, Matemáticas e Inglés.\nCon EducAprende queremos que los estudiantes se mantengan motivados y entretenidos con la materia, combinando el juego con el aprendizaje para que estudiar sea una experiencia más dinámica y significativa.";

        });
    });
}