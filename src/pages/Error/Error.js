import "./_error.scss";

import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="errorSection">
      <p className="errorTitle">404</p>
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <NavLink className={"navlink"} to="/">
        <h2>Retourner sur la page d'accueil</h2>
      </NavLink>
    </div>
  );
}
