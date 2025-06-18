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
                nameAbout.innerHTML = '👩‍💻 Fernanda';
                detailAbout.innerHTML = 'Fernanda es una desarrolladora backend apasionada y con un talento increíble para resolver problemas complejos. Su inteligencia, carisma e introversión se combinan con una ternura que la hace única en cualquier equipo. Es meticulosa, enfocada y siempre encuentra soluciones eficientes con una lógica impecable. Una programadora brillante que aporta profundidad y dulzura al mundo tech. 💡🐱‍💻💜';
            } else if (developer.classList.contains('diego')) {
                nameAbout.innerHTML = '👨‍🎨 Diego';
                detailAbout.innerHTML = 'Diego es un desarrollador frontend junior lleno de energía, creatividad e inteligencia. Le apasiona crear interfaces amigables y accesibles, siempre con un enfoque en la experiencia del usuario. Su carisma natural y su compromiso con una educación de calidad para niños y niñas lo impulsan a diseñar con sentido y propósito. Un crack del diseño funcional con corazón educativo. 🎨👦📚✨';
            } else if (developer.classList.contains('gonzalo')) {
                nameAbout.innerHTML = '🤔 Gonzalo';
                detailAbout.innerHTML = 'Gonzalo es un desarrollador full stack junior con una mirada reflexiva y profunda sobre el desarrollo de software. Su personalidad más introspectiva no impide que brille por su simpatía y cercanía cuando se trata de colaborar. Siempre atento a los detalles, le apasiona construir tecnología con sentido. Un pensador lógico con alma creativa. 🌌💻🧠';
            } else if (developer.classList.contains('felipe')) {
                nameAbout.innerHTML = '😄 Felipe';
                detailAbout.innerHTML = 'Felipe es un desarrollador full stack junior carismático al 100%, divertido, cercano y con un talento natural para conectar con las personas. Su humor y energía contagian, pero también se toma muy en serio la importancia de la educación. Cree en el poder de la tecnología como herramienta para transformar la vida de los niños con calidad y alegría. Un desarrollador con chispa y propósito.🚀📘🧒';
            } else if (developer.classList.contains('margarita')) {
                nameAbout.innerHTML = '😂 Margarita';
                detailAbout.innerHTML = 'Margarita es una desarrolladora full stack junior, apasionada por crear experiencias digitales con propósito. Me encanta programar, pero aún más ver cómo la tecnología puede hacer sonreír y aprender a otros, especialmente a niños y niñas. Soy simpática, divertida y siempre busco sacarle una risa a quien tengo al lado, sin perder el foco en la responsabilidad y la calidad que todo proyecto educativo merece. Creo firmemente que el aprendizaje debe ser significativo, accesible y entretenido 💻✨👧👦';
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