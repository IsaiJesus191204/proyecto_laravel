import React from "react";
import { Link } from "react-router-dom";
import { Modal } from 'react-bootstrap'; // Importa el componente Modal de react-bootstrap
import logo4 from "../../assets/img/mas.png";
import Publicacion_card from "./publicacion_card";
import "./publicaciones.css";

function Publicacion() {
  const [showModal, setShowModal] = React.useState(false); 

  const openModal = () => {
    document.body.classList.add("modal-open"); 
    setShowModal(true);
  };

  const closeModal = () => {
    document.body.classList.remove("modal-open");   
    setShowModal(false);
  };

  return (
    <>
      <div className="publicaciones_">
        <div className="menu">
          <a href="#" type="button" onClick={openModal}>
            <img src={logo4} alt="Logo" className="menu-icon" />
          </a>

          <Modal show={showModal} onHide={closeModal} dialogClassName="custom-modal"> 
            <Modal.Header closeButton>
              <Modal.Title>Crear Publicación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="padre_create_p">
        <header>
          <nav>

            <h3>Nueva Publicacion</h3>
          </nav>
          <nav>
          </nav>
        </header>
        <body>
          <form>
            <div>
              <lavel for="titulo">Titulo</lavel>
              <input type="text" name="titulo" id="" />
            </div>
            <div>
              <lavel for="sub_tema">Sub Tema:  </lavel>
              <input type="text" name="sub_tema" id="" />
            </div>
            <div>
              <lavel for="contenido">Contenido:  </lavel>
              <textarea name="contenido" id="contenido"></textarea>
            </div>
            <div>
              <lavel for="imagen">Imagen:         </lavel>
              <input type="file" name="imagen" id="" accept="images/*" />
            </div>
            <div>
              <nav>
                <lavel for="categoria">Categoria</lavel>
                <select name="pais">
                  <option value="1">Selecciona un país</option>
                  <option value="2">Estados Unidos</option>
                  <option value="3">Canadá</option>
                  <option value="4">México</option>
                </select>
              </nav>
              <nav>
                <lavel for="tema">Tema</lavel>
                <select name="pais">
                  <option value="1">Selecciona un país</option>
                  <option value="2">Estados Unidos</option>
                  <option value="3">Canadá</option>
                  <option value="4">México</option>
                </select>
              </nav>
            </div>

            <div>
              <button>Cancelar</button>
              <button>Crear</button>
            </div>
          </form>
        </body>
      </div>
            </Modal.Body>
            <Modal.Footer>
            <button type="button" onClick={closeModal}>Cerrar</button>
            </Modal.Footer>
          </Modal>
          {/* Fin del modal */}



          <nav class="menu_nav" id="nav">
            <span class="nav-item active">
              <span class="icon">
                <i data-feather="home"></i>
              </span>
              <a href="#">Noticias</a>
            </span>
            <span class="nav-item">
              <span class="icon">
                <i data-feather="search"></i>
              </span>
              <a href="#">Avisos</a>
            </span>
            <span class="nav-item">
              <span class="icon">
                <i data-feather="bell"></i>
              </span>
              <a href="#">Eventos</a>
            </span>
            <span class="nav-item">
              <span class="icon">
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
    </>
  );
}

export default Publicacion;
