import React from "react";

import logo2 from "../../assets/img/user.png";

import "./publicaciones.css";

function Publicacion_card() {
  return (
    <>
      <div className="card_home">
        <div className="card">
          <div className="info">
            <div className="user_img">
              <img src={logo2}></img>
              <nav className="nav">
                <samp>p4cman jose</samp>
                <samp>mapap@senati.pe</samp>
              </nav>
              <nav className="nac">16 / 04 / 2024</nav>
            </div>
            <div className="cont_info">
              <p>
                Proyecto real no fake
                empresariahhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllldssssss
                que son participes los alumnos de senati lamentablemente:
                trabajo asignado con el proposito de presentarlo y aprobar el
                ciclo, posdata tu prima
              </p>
              <nav>
                <button>Noticias</button>
                <button>Relaciones</button>
              </nav>
            </div>
          </div>
          <div className="img_card">
            <img src={logo2}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Publicacion_card;
