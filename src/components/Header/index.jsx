import React, {useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import "./style.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";

function Header() {
  const { authUser, setAuthUser, isLogged, setIsLogged } = useAuth();
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  

  function handleLogout() {
    localStorage.removeItem("token");
    setIsLogged(false);
    setAuthUser(null)
    navigate("/login");
  }

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
                <Link to="/" className="links">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/books" className="links">
                  Books
                </Link>
              </li>
              {isLogged ? (
                <div className="container-islogged">
                  <li>
                    <Link to="/addbook" className="links">
                      New Book
                    </Link>
                  </li>

                  <li>
                    <button className="links" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </div>
              ) : (
                <li>
                  <Link to="/login" className="links login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
