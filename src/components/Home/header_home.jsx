import { useState } from "react";
import React from "react";
// MiComponente.js
import { Link } from "react-router-dom";

import logo3 from "../../assets/img/audi.png";
import logo from "../../assets/img/logo.png";
import logo2 from "../../assets/img/user.png";

import "./header_home.css";

function Header_home() {
 
     const userData = JSON.parse(localStorage.getItem("userData"));

 

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
        <p className=" user_p mr-4 text-1xl">
          {userData.data_user[0].nombre} -{userData.data_user[0].nombre_rol}
        </p>
        <div className="user rounded" onClick={toggleModal}>
          <img
            src={userData.data_user[0].imagen_usuario}
            className="rounded-full"
          ></img>
        </div>
        {modalVisible && (
          <div className="modal_login">
            <div className="modal-content">
              <nav>
                <p>Usurio</p>
                <p>{userData.data_user[0].email}</p>
              </nav>
              <nav>
                <p>Rol</p>
                <p>{userData.data_user[0].nombre_rol}</p>
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
