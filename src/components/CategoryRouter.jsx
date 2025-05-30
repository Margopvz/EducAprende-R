import { useParams } from "react-router-dom";
import TimeLGame from "./TimeLGame/TimeLGame";
import WordleGame from "./WordleGame/WordleGame"
import SopaDeLetras from "./SopaDeLetras/sopaDeLetras";
const CategoryRouter = () => {
  const { asignatura } = useParams();

  switch (asignatura) {
    case "historia":
      return <TimeLGame />;
    case "lenguaje":
      return <WordleGame />;
    case "ingles":
      return <SopaDeLetras />;
      
    default:
      return <h2 className="text-dark bg-danger-subtle">Asignatura no encontrada :(</h2>;
  }
};

export default CategoryRouter;
