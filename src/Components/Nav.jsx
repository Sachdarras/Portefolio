import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projet" className="nav-link">
            Projet
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
