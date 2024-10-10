import "./_header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <NavLink className={"navlink"} to="/">
        <img
          className="header-logo"
          src={require("../../assets/logo/kasa_logo-primary.png")}
          alt="logo"
        />
      </NavLink>

      <nav className="nav">
        <NavLink className={"navlink"} to="/">
          <h3> Accueil</h3>
        </NavLink>
        <NavLink className={"navlink"} to="about">
          <h3> A Propos</h3>
        </NavLink>
      </nav>
    </header>
  );
}
