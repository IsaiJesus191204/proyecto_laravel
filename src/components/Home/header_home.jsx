// MiComponente.js
import { Link } from "react-router-dom";

import { useState } from "react";
import React from "react";
import logo from "../../assets/img/logo.png";
import logo2 from "../../assets/img/user.png";
import logo3 from "../../assets/img/audi.png";
import "./header_home.css";
function Header_home(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="padre_home">
      <div className="head_home">
        <div className="logo">
          <Link to={"/home"}>
            <img src={logo3} className=""></img>
          </Link>
        </div>
        <div className="busqueda_home">
          <form class="busqueda_form">
            <div class="input_busqueda">
              <input placeholder="buscar ... " />
            </div>
          </form>
        </div>
      </div>
      <div className="user_box flex items-center">
        <p className=" user_p mr-4 text-1xl">Luis Niebles - Estudiante</p>
        <div
          className="user rounded"
          onClick={toggleModal}
        >
          <img src={logo2} className="rounded-full"></img>
        </div>
        {modalVisible && (
          <div className="modal_login">
            <div className="modal-content">
              <nav>
                <p>Usurio</p>
                <p>luis@gmail.com</p>
              </nav>
              <nav>
                <p>Rol</p>
                <p>Estudiante</p>
              </nav>

              <button onClick={toggleModal}>Salir</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header_home;
