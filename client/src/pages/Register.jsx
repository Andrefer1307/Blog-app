import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserCircle, FaLock } from "react-icons/fa"; // Importar iconos de Font Awesom
import { MdOutlineMailOutline } from "react-icons/md";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Registro</h1>
      <form>
      
      <div className="input-group">
            <FaUserCircle className="icon" />
            <input
              required
              type="text"
              placeholder="Usuario"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <MdOutlineMailOutline className="icon"/>
            <input
            required
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              required
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
            />
        </div>
        <button onClick={handleSubmit}>Registrar</button>
        {err && <p>{err}</p>}
        <span>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
