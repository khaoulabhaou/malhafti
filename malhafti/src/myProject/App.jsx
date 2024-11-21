import { malhafti } from "../api/malhafti";
import Affichage from "./Affichage.jsx";
export default function Malhfa() {
  return (
    <div>
      {malhafti.malhafti.map((element, i) => {
        return (
          <Affichage malhafti={element} key={i} />
        );
      })}
    </div>
  );
}