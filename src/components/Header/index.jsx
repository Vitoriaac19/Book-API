import { Outlet, Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books"></Link>Books</li>
            <li><Link to="/login"></Link>Login</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
