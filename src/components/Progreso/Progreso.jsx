import { useContext} from 'react';
import { AuthContext } from "../../context/AuthContext";
import  './Progreso.css'



function Progreso() {
  const { user, logout } = useContext(AuthContext); // suscritos al contexto para acceder a los datos del usuario
  

return (
    
<main className="progreso shadow-lg mx-auto w-[90%] sm:max-w-xl mt-6 rounded-lg p-6 ">
 {user ? (
    <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Bienvenid@, {user.name} 
    </h1> )
    : (
    <p>Cargando usuario...</p>
    )}

{/* Logros */}
<section >
<div className="flex justify-between items-center mb-2">
    <h2 className="text-xl font-bold text-purple-700">Logros</h2>
    <span className="text-gray-600 font-semibold">Progreso</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4 mb-1">
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-4 rounded-full animate-progress" style={{ width: "65%" }}></div>
    </div>
    <p className="text-right font-bold text-gray-700">65%</p>
</section>

{/* Recompensas */}
<section className="mt-8 rewards">
    <h3 className="font-bold text-lg text-purple-700 mb-4 text-center">Recompensas</h3>
    <div className="flex flex-wrap justify-center gap-6">
    <img src="/src/assets/img/recompensa1.png" alt="Medalla" className="w-20 h-20 object-contain" />
    <img src="/src/assets/img/recompensa2.png" alt="Estrella" className="w-20 h-20 object-contain" />
    <img src="/src/assets/img/recompensa3.png" alt="Trofeo" className="w-20 h-20 object-contain" />
    <img src="/src/assets/img/recompensa4.png" alt="Candado" className="w-20 h-20 object-contain" />
    </div>
</section>

<section className="mt-8 badges">
    <h3 className="font-bold text-lg text-purple-700 mb-4 text-center">Insignias</h3>
    <div className="flex flex-wrap justify-center gap-6">
    <img src="/src/assets/img/insignia1.png" alt="Sol" className="w-20 h-20 object-contain" />
    <img src="/src/assets/img/insignia2.png" alt="Libro" className="w-20 h-20 object-contain" />
    <img src="/src/assets/img/insignia3.png" alt="Bombillo" className="w-20 h-20 object-contain" />
    <img src="/src/assets/img/insignia4.png" alt="Estrella verde" className="w-20 h-20 object-contain" />
    </div>
</section>
</main>
);
}

export default Progreso;