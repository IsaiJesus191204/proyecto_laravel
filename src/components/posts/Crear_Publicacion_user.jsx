import React, { useState } from "react";

import "./Crear_Publicacion_user.css";
import logo3 from "../../assets/img/user.png";
function CrearPublicacion_user({
  id,
  nombre_usuario,
  email_usuario,
  fecha_comentario,
  contenido,
  id_usuario,
  imagen_usuario,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <div className="padre_coment_user" id={id}>
        <section className="coment_user_img" id={id_usuario}>
          <img src={imagen_usuario}></img>
        </section>
        <section className="section_public_coment">
          <div className="coment_user_coment">
            <nav className="coment_user_info">
              <div>
                <p>{nombre_usuario}</p>
                <p>{email_usuario}</p>
              </div>
              <div>{fecha_comentario}</div>
            </nav>
            <nav className="coment_user_text">{contenido}</nav>
          </div>
          <div className="responder">
            <button onClick={toggleModal}>responder</button>
          </div>
          {modalVisible && (
            <div className="modal_responder">
              <img src={logo3}></img>
              <form>
                <input type="text" placeholder="ingrese su comentario"></input>

                <button type="sybmit">publicar</button>
              </form>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default CrearPublicacion_user;
