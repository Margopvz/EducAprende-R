import { useParams } from "react-router-dom";
import TimeLGame from "./Games/TimeLGame/TimeLGame";
import WordleGame from "./Games/WordleGame/WordleGame";
import SopaDeLetras from "./Games/SopaDeLetras/SopaDeLetras";
import TriviaCiencias from "./Games/TriviaCiencias/TriviaCiencias";
import MathGame from './Games/MathGame/MathGame';

const CategoryRouter = () => {
  const { asignatura } = useParams();

  switch (asignatura) {
    case "matematicas":
      return <MathGame />;
    case "historia":
      return <TimeLGame />;
    case "lenguaje":
      return <WordleGame />;
    case "ingles":
      return <SopaDeLetras />;
    case "ciencias":
      return <TriviaCiencias />;  
    default:
      return <h2 className="text-dark bg-danger-subtle">Asignatura no encontrada :(</h2>;
  }
};

export default CategoryRouter;
