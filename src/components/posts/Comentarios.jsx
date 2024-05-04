import React, { useEffect, useState } from "react";
import "./Comentarios.css";
import axios from "axios";
import logo5 from "../../assets/img/comentario.png";

import { useLocation } from "react-router-dom";

import CrearPublicacion_user from "./Crear_Publicacion_user";
import { Link } from "react-router-dom";

import logo3 from "../../assets/img/user.png";
import { data } from "autoprefixer";

function Comentarios() {
  const location = useLocation();
  const { publicacionData } = location.state || {};

  console.log(publicacionData.id);

  const [mostrarComentarios, setMostrarComentarios] = useState(true);

  const handleGoBack = () => {
    window.history.back();
  };

  //evento_comentar

  //id_user

  const userData = JSON.parse(localStorage.getItem("userData"));

  const User_id = userData.data_user[0].id;
  console.log(User_id);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  //formulario para comentar

  const [contenido, setContenido] = useState("");
  const [usuario_id, setusuario_id] = useState("");
  const [publicacion_id, setpublicacion_id] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData2 = new FormData();

    formData2.append("contenido", contenido);
    formData2.append("usuario_id", User_id);
    formData2.append("publicacion_id", publicacionData.id);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/comentarios",
        formData2
      );
      console.log("Respuesta del servidor:", response);

      if (response.status === 201) {
        // Redirigir a la página de inicio si la respuesta es 201
        window.location.href = "/Comentarios";
      }
    } catch (e) {
      console.error("Error al crear la publicación:", e);
    }
  };

  //lista de comentarios por publicacion

  const [Comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const fetchComentarios = async (id) => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/comentarios/${id}`
        );
        const data = await response.json();
        setComentarios(data.comentarios);
        console.log(data.comentarios);
      } catch (error) {
        console.error("Error al obtener la lista de comentario", error);
      }
    };

    fetchComentarios(publicacionData.id);
  }, []);

  return (
    <>
      {mostrarComentarios && (
        <div className="comentarios-container">
          <header>
            <div className="top-frame">
              <h2>Publicacion de {publicacionData.nombre_usuario}</h2>
              <span className="close-btn" onClick={handleGoBack}>
                &#10006;
              </span>
            </div>
            <hr className="divider_22" />
            <br />
            <div className="header-container">
              <div className="profile-info">
                <div className="user-details">
                  <img src={publicacionData.imagen_usuario} className=""></img>

                  <div className="user-name">
                    <h1>{publicacionData.nombre_usuario}</h1>
                    <nav className="nav">
                      <samp>{publicacionData.email_usuario}</samp>
                    </nav>
                  </div>
                </div>
                <div className="action-buttons">
                  <button className="btn_noticia">
                    {publicacionData.nombre_categoria}
                  </button>
                  <button className="btn_programacion">
                    {publicacionData.nombre_tema}
                  </button>
                </div>
                <nav className="nac">{publicacionData.fecha_publicacion}</nav>
              </div>
            </div>
            <br />
            <div className="texto_medio">
              <p>{publicacionData.sub_tema}</p>
            </div>
            <div className="imagen_arbol">
              <img
                src={publicacionData.imagen_publicacion}
                alt="Imagen de comentario"
                className="imagen_arbol"
              />
            </div>
            <div className="comentario">
              <div className="top-framee">
                <div className="comentar">
                  <h2>COMENTARIOS:</h2>
                  <div onClick={toggleModal} className="realizar_mi_comentario">
                    <p>comentar</p>
                    <img src={logo5}></img>
                  </div>
                </div>

                {modalVisible && (
                  <div className="modal_responder">
                    <img src={logo3}></img>

                    <input
                      type="hidden"
                      className="form-control"
                      id="titulo"
                      value={usuario_id}
                      onChange={(e) => setusuario_id(e.target.value)}
                    />
                    <input
                      type="hidden"
                      className="form-control"
                      id="titulo"
                      value={publicacion_id}
                      onChange={(e) => setpublicacion_id(e.target.value)}
                    />
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="ingrese su comentario"
                        value={contenido}
                        onChange={(e) => setContenido(e.target.value)}
                      />

                      <button type="submit" onClick={handleSubmit}>
                        publicar
                      </button>
                    </form>
                  </div>
                )}

                {Comentarios.map((comentario) => (
                  <CrearPublicacion_user
                    id={comentario.id_comentario}
                    nombre_usuario={comentario.nombre_usuario}
                    email_usuario={comentario.email_usuario}
                    fecha_comentario={comentario.fecha_comentario}
                    contenido={comentario.contenido}
                    id_usuario={comentario.usuario_id}
                    imagen_usuario={comentario.imagen_usuario}
                  />
                ))}
              </div>
            </div>
          </header>
        </div>
      )}
    </>
  );
}

export default Comentarios;
