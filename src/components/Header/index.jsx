import { Outlet, Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <div className="container-title">
            <p className="title">WorldUp!</p>
          </div>
          
          <div className="container-links">
            <ul>
              <li>
                <Link to="/" className="links">Home</Link>
              </li>
              <li>
                <Link to="/books" className="links">Books</Link>
              </li>
              <li>
                <Link to="/login" className="links login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
