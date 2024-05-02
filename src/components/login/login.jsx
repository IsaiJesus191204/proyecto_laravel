import logo2 from "../../assets/img/user.png";

import logo3 from "../../assets/img/login.png";
import logo4 from "../../assets/img/google.png";
import logo1 from "../../assets/img/github.png";
import { Link } from "react-router-dom";
import "./login.css";
import React, { useState } from "react";

import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://127.0.0.1:8000/api/login", {
      email,
      password,
    });

    const { status, message } = response.data;

    if (status === "success") {
      window.location.href = "/home";
      console.log(message);
    }
    if (status === "failed") {
      console.log(message);
    }
  };

  return (
    <>
      <div className="padre_login">
        <section className="part1">
          <div className="logo_login">
            <img src={logo2}></img>
          </div>
          <div className="form">
            <form onSubmit={handleLogin}>
              <label> Correo</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <nav>
                <div>
                  <input type="radio"></input> <p>recordame </p>
                </div>

                <a href="">¿olvidaste tu contraseña?</a>
              </nav>
              <button type="submit">Entrar</button>
            </form>
          </div>
          <div className="otros">
            <nav className="con">
              <p>o entrar con </p>
            </nav>
            <nav className="button">
              <button>
                <img src={logo4}></img>
                <p>Google</p>
              </button>
              <button>
                <img src={logo1}></img> <p>GitHub</p>
              </button>
            </nav>
          </div>
        </section>
        <div className="part2"></div>
      </div>
    </>
  );
}
export default Login;
