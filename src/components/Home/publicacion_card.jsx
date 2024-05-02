import React, { useEffect, useState } from "react";

import logo2 from "../../assets/img/user.png";

import "./publicaciones.css";

function Publicacion_card() {
  
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/publicaciones")
      .then((response) => response.json())
      .then((data) => setPublicaciones(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {publicaciones.map((publicacion, index) => (
        <div key={publicacion.id} className="card_home">
          <div className="card_public">
            <div className="info_">
              <div className="user_img">
                <img src={publicacion.imagen_usuario || logo2} alt="User" />
                <nav className="nav">
                  <samp>{publicacion.nombre_usuario}</samp>
                  <samp>{publicacion.email_usuario}</samp>
                </nav>
                <nav className="nac">{publicacion.fecha_publicacion}</nav>
              </div>
              <div className="cont_info">
                <p>{publicacion.sub_tema}</p>
                <nav>
                  <button>{publicacion.nombre_tema}</button>
                  <button>{publicacion.nombre_categoria}</button>
                </nav>
              </div>
            </div>
            <div className="img_card">
              <img
                src={publicacion.imagen_publicacion || logo2}
                alt="Publicacion"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Publicacion_card;
