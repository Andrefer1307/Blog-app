import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>Inicio</h6>
          </Link>
          <Link className="link" to="/?cat=acerca">
            <h6>¿Quiénes Somos?</h6>
          </Link>
          <Link className="link" to="/?cat=servicios">
            <h6>Servicios</h6>
          </Link>
          <Link className="link" to="/?cat=destinos">
            <h6>Destinos</h6>
          </Link>
          <Link className="link" to="/?cat=noticias">
            <h6>Noticias</h6>
          </Link>          
          <span className="write">
            <Link className="link" to="/write">
              Nuevo
            </Link>
          </span>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout} id="logoutButton">Cerrar Sesión</span>
          ) : (
            <Link className="link" to="/login">
              Inicia Sesión
            </Link>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
