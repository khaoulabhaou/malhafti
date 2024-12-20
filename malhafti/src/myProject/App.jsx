import { malhafti } from "../api/malhafti";
import Affichage from "./Affichage.jsx";
import './style.css'
export default function Malhfa() {
  return (
    <div className="container">
      {malhafti.malhafti.map((element, i) => {
        return (
          <Affichage malhafti={element} key={i} />
        );
      })}
    </div>
  );
}