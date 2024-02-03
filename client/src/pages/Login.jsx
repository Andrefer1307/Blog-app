import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { FaUserCircle, FaLock } from "react-icons/fa"; // Importar iconos de Font Awesom

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();


  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>Iniciar Sesión</h1>
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
            <FaLock className="icon" />
            <input
              required
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
            />
        </div>
        <button onClick={handleSubmit}>Iniciar Sesión</button>
        {err && <p>{err}</p>}
        <span>
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
