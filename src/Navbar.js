import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="menu-container">
      <ul className="menu-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
