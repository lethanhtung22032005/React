import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/product" className={({ isActive }) => (isActive ? "active" : "")}>
        Product
      </NavLink>
      <NavLink to="/detail" className={({ isActive }) => (isActive ? "active" : "")}>
        Detail
      </NavLink>
    </nav>
  );
}
