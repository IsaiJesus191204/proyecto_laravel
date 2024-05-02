import React, { useState } from "react";

import "./Crear_Publicacion_user.css";
import logo3 from "../../assets/img/user.png";
function CrearPublicacion_user() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <div className="padre_coment_user">
        <section className="coment_user_img">
          <img src={logo3}></img>
        </section>
        <section className="section_public_coment">
          <div className="coment_user_coment">
            <nav className="coment_user_info">
              <div>
                <p>juanito maicol</p>
                <p>juanitopere@senati.pe </p>
              </div>
              <div>26 / 02 / 2024</div>
            </nav>
            <nav className="coment_user_text">
              se nota que alguien aquí nunca a salido de Mexico 😅 Si se da
              cuenta en los señalamientos están en otro idioma , por lo tanto
              esa tecnología solo es para países 1er mundistas jajajajajajaa
            </nav>
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
