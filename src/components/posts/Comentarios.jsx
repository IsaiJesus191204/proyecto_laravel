import React, { useState } from "react";
import logo2 from "../../assets/img/perrrfil.png";
import "./Comentarios.css";
import logo3 from "../../assets/img/gegege.jpg";
import CrearPublicacion_user from "./Crear_Publicacion_user";
import { Link } from "react-router-dom";
function Comentarios() {
  const [mostrarComentarios, setMostrarComentarios] = useState(true);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      {mostrarComentarios && (
        <div className="comentarios-container">
          <header>
            <div className="top-frame">
              <h2>Publicacion de p4cman jose</h2>
              <span className="close-btn" onClick={handleGoBack}>
                &#10006;
              </span>
            </div>
            <hr className="divider_22" />
            <br />
            <div className="header-container">
              <div className="profile-info">
                              <div className="user-details">
                                  
                 <Link to={"/home"}>
                <img src={logo2} className=""></img>
              </Link>
                  <div className="user-name">
                    <h1>p4cman jose</h1>
                    <nav className="nav">
                      <samp>mapap@senati.pe</samp>
                    </nav>
                  </div>
                </div>
                <div className="action-buttons">
                  <button className="btn_noticia">Noticia</button>
                  <button className="btn_programacion">Programacion</button>
                </div>
                <nav className="nac">30 / 04 / 2024</nav>
              </div>
            </div>
            <br />
            <div className="texto_medio">
              <p>
                Nuestra imagen personal es una parte esencial de lo que somos.
                Es una forma de comunicar al mundo quiénes somos y qué pensamos
                de nosotros mismos. De hecho, es mucho más que nuestro aspecto:
                nuestra imagen personal también se refiere a cómo nos
                comportamos y cómo nos desenvolvemos en situaciones sociales.
              </p>
            </div>
            <div className="imagen_arbol">
              <img
                src={logo3}
                alt="Imagen de comentario"
                className="imagen_arbol"
              />
            </div>
            <div className="comentario">
              <div className="top-framee">
                <h2>COMENTARIOS:</h2>

                <CrearPublicacion_user></CrearPublicacion_user>
                <CrearPublicacion_user></CrearPublicacion_user>
                <CrearPublicacion_user></CrearPublicacion_user>
                <CrearPublicacion_user></CrearPublicacion_user>
                <CrearPublicacion_user></CrearPublicacion_user>
                <CrearPublicacion_user></CrearPublicacion_user>
              </div>
            </div>
          </header>
        </div>
      )}
    </>
  );
}

export default Comentarios;
