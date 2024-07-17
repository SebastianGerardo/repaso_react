import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">LOGO</span>
      <ul className="list">
        <li>
            <Link to="/">
                Inicio
            </Link>
        </li>
        <li>
            <Link to="/pagina1">
                Pagina 1
            </Link>
        </li>
        <li>
            <Link to="/pagina2">
                Pagina 2
            </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
