import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo4 from "../../assets/img/mas.png";
import Publicacion_card from "./publicacion_card";
import logo3 from "../../assets/img/mas.png";
import { Link } from "react-router-dom";
import logo_virgo from "../../assets/img/virgo_png.png"
import "./publicaciones.css";

function Publicacion() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    titulo: '',
    subTema: '',
    contenido: '',
    categoria: '',
    tema: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCreatePost = () => {
    setShowForm(false);

    const { titulo, subTema, contenido, categoria, tema } = formData;
    const alertMessage = `
      Título: ${titulo}
      Sub Tema: ${subTema}
      Contenido: ${contenido}
      Categoría: ${categoria}
      Tema: ${tema}
    `;
    window.alert(alertMessage);
  };

  const toggleForm = () => setShowForm(!showForm);

  return (
    <div className="publicaciones_">
      <div className="menu">
        <a href="#" onClick={toggleForm} type="button">
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

      {showForm && (
        <div className="modal-container">
          <div className="modal-content">
            <div className='contenedor_virgo'>
            <img src={logo3} className="mas_no_funca"></img>
          <h1 class="titulo">Nueva Publicación</h1>
          <img src={logo_virgo} className="logo_virgo"></img>

          </div>
          <hr className="separador_horizontal" />
          <br />

                  <br />  
                  
                  <div className='doble_margen'>
            <form>
              <div className="form-group">
                <label htmlFor="titulo">Título</label>
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label htmlFor="sub_tema">Sub Tema</label>
                <input
                  type="text"
                  className="form-control"
                  id="subTema"
                  value={formData.subTema}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contenido">Contenido</label>
                <textarea
                  className="form-control"
                  id="contenido"
                  value={formData.contenido}
                  onChange={handleChange}
                ></textarea>
              </div>


              <label htmlFor="sub_tema">Imagen</label>
              <br />
              <br />
              <div className="image-input">
    <label htmlFor="image-input">add a file</label>
    
    <input
        type="file"
        id="image-input"
        accept="image/*"
        className="custom-file-input"
    />
</div>

    <br /><br />
              
              
             


             
    <div class="contenedor_horizontal">
    <div class="grupo_selector">
        <div class="titulo_categoria">
            <label for="categoria">Categoría</label>
        </div>
        <select
            class="form-control"
            id="categoria"
            value={formData.categoria}
            onChange={handleChange}
        >
            <option value="1">Selecciona un país</option>
            <option value="2">Estados Unidos</option>
            <option value="3">Canadá</option>
            <option value="4">México</option>
        </select>
    </div>

    <div class="grupo_selector">
        <div class="titulo_tema">
            <label for="tema">Tema</label>
        </div>
        <select
            class="form-control"
            id="tema"
            value={formData.tema}
            onChange={handleChange}
        >
            <option value="1">Selecciona un país</option>
            <option value="2">Estados Unidos</option>
            <option value="3">Canadá</option>
            <option value="4">México</option>
        </select>
    </div>
</div>





            </form>
            <div className="modal-footer">
              <button className="btn_cancelar" onClick={toggleForm}>Cancelar</button>
              <button className="btn_crear" onClick={handleCreatePost}>Crear</button>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Publicacion;
