import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo4 from "../../assets/img/mas.png";
import Publicacion_card from "./publicacion_card";
import { Link } from "react-router-dom";
import "./publicaciones.css";

function Publicacion() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="publicaciones_">
        <div className="menu">
          <a href="#" onClick={handleShow} type="button">
            <img src={logo4} alt="Logo" className="menu-icon" />
          </a>

          <nav className="menu_nav" id="nav">
            <span className="nav-item active">
              <span className="icon">
                <i data-feather="home"></i>
              </span>
              <a href="#">Noticias</a>
            </span>
            <span className="nav-item">
              <span className="icon">
                <i data-feather="search"></i>
              </span>
              <a href="#">Avisos</a>
            </span>
            <span className="nav-item">
              <span className="icon">
                <i data-feather="bell"></i>
              </span>
              <a href="#">Eventos</a>
            </span>
            <span className="nav-item">
              <span className="icon">
                <i data-feather="star"></i>
              </span>
              <a href="#">Todos</a>
            </span>
          </nav>
        </div>

        <Link to={"/user_posts"}>
          <Publicacion_card />
          <Publicacion_card />
          <Publicacion_card />
          <Publicacion_card />
          <Publicacion_card />
        </Link>
      </div>

      <Modal show={showModal} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Nueva Publicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
          <div className="form-group">
              <label htmlFor="titulo">Título</label>
              <input type="text" className="form-control" id="titulo" />
            </div>
            <div className="form-group">
              <label htmlFor="sub_tema">Sub Tema</label>
              <input type="text" className="form-control" id="sub_tema" />
            </div>
            <div className="form-group">
              <label htmlFor="contenido">Contenido</label>
              <textarea className="form-control" id="contenido"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="imagen">Imagen</label>
              <input type="file" className="form-control-file" id="imagen" accept="images/*" />
            </div>
            <div className="form-group">
              <label htmlFor="categoria">Categoría</label>
              <select className="form-control" id="categoria">
                <option value="1">Selecciona un país</option>
                <option value="2">Estados Unidos</option>
                <option value="3">Canadá</option>
                <option value="4">México</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="tema">Tema</label>
              <select className="form-control" id="tema">
                <option value="1">Selecciona un país</option>
                <option value="2">Estados Unidos</option>
                <option value="3">Canadá</option>
                <option value="4">México</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={handleClose}>Crear</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Publicacion;
