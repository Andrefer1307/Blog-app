import React from "react";
import Logo from "../img/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        <h3>CONTÁCTANOS</h3>
        <p><b>Teléfono</b></p>
        <p>(0212) 453 4523</p>
        <p><b>Email</b></p>
        <p>turistea@gmail.com</p>
      </span>
      <div className="redes">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
        <a href="https://api.whatsapp.com/send?phone=584123456789&text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>
      <div className="copy"><small>&copy; 2024 <b>Turistea</b> - Todos los Derechos Reservados</small></div>
    </footer>
  );
};

export default Footer;
