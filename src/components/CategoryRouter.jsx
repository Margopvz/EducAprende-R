import { useParams } from "react-router-dom";
import TimeLGame from "./TimeLGame/TimeLGame";
import WordleGame from "./WordleGame/WordleGame"

const CategoryRouter = () => {
  const { asignatura } = useParams();

  switch (asignatura) {
    case "historia":
      return <TimeLGame />;
    case "lenguaje":
      return <WordleGame />;
    default:
      return <h2 className="text-dark bg-danger-subtle">Asignatura no encontrada :(</h2>;
  }
};

export default CategoryRouter;
