import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo4 from "../../assets/img/mas.png";
import logo3 from "../../assets/img/mas.png";
import logo_virgo from "../../assets/img/virgo_png.png";
// Importa axios
import Publicacion_card from "./publicacion_card";

import "./publicaciones.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Publicacion() {

    const userData = JSON.parse(localStorage.getItem("userData"));

  console.log(userData.data_user[0].id);
  const User_id = userData.data_user[0].id;

  const [titulo, setTitulo] = useState("");
  const [subTema, setSubTema] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState(null);
  const [usuario_id, setusuario_id] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [temaId, setTemaId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto FormData para enviar datos de formulario y archivos
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("Sub_tema", subTema);
    formData.append("contenido", contenido);
    formData.append("imagen", imagen);
    formData.append("usuario_id", User_id);
    formData.append("categoria_id", categoriaId);
    formData.append("tema_id", temaId);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/publicaciones",
        formData
      );
      console.log("Respuesta del servidor:", response.data);

      if (response.status === 201) {
        // Redirigir a la página de inicio si la respuesta es 201
        window.location.href = "/home";
      }
    } catch (e) {
      console.error("Error al crear la publicación:", e);
    }
  };

  const [showForm, setShowForm] = useState(false);

  const [categorias, setCategorias] = useState([]);
  const [temas, setTemas] = useState([]); // Agrega estado para almacenar los temas

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/categorias");
        const data = await response.json();
        setCategorias(data.message);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };

    const fetchTemas = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/tema");
        setTemas(response.data.message);
      } catch (error) {
        console.error("Error al obtener los temas:", error);
      }
    };

    fetchCategorias();
    fetchTemas(); // Llama a la función para obtener los temas
  }, []);

  const toggleForm = () => setShowForm(!showForm);

  //card_publicaciones
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/publicaciones")
      .then((response) => response.json())
      .then((data) => setPublicaciones(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //uno
  //const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);

  const navigate = useNavigate();

  const handleSeleccionarPublicacion = async (id) => {
    try {
      // Realizar la llamada a la API con el id
      const response = await fetch(
        `http://127.0.0.1:8000/api/publicaciones/${id}`
      );
      const data = await response.json();

      // Navegar a user_posts con los datos de la publicación
      navigate("/user_posts", { state: { publicacionData: data } });

      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

      {publicaciones.map((publicacion) => (
        <div
          key={publicacion.id}
          onClick={() => handleSeleccionarPublicacion(publicacion.id)}
        >
          <Publicacion_card
            id={publicacion.id}
            imagen_usuario={publicacion.imagen_usuario}
            id_usuario={publicacion.id_usuaio}
            imagen_publicacion={publicacion.imagen_publicacion}
            nombre_usuario={publicacion.nombre_usuario}
            email_usuario={publicacion.email_usuario}
            fecha_publicacion={publicacion.fecha_publicacion}
            sub_tema={publicacion.sub_tema}
            nombre_tema={publicacion.nombre_tema}
            nombre_categoria={publicacion.nombre_categoria}
          />
        </div>
      ))}

      {showForm && (
        <div className="modal-container">
          <div className="modal-content">
            <div className="contenedor_virgo">
              <img src={logo3} className="mas_no_funca"></img>
              <h1 class="titulo">Nueva Publicación</h1>
              <img src={logo_virgo} className="logo_virgo"></img>
            </div>
            <hr className="separador_horizontal" />
            <br />

            <br />

            <div className="doble_margen">
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  className="form-control"
                  id="titulo"
                  value={usuario_id}
                  onChange={(e) => setusuario_id(e.target.value)}
                />
                <div className="form-group">
                  <label htmlFor="titulo">Título</label>
                  <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sub_tema">Sub Tema</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subTema"
                    value={subTema}
                    onChange={(e) => setSubTema(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contenido">Contenido</label>
                  <textarea
                    className="form-control"
                    id="contenido"
                    value={contenido}
                    onChange={(e) => setContenido(e.target.value)}
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
                    onChange={(e) => setImagen(e.target.files[0])}
                  />
                </div>

                <br />
                <br />

                <div class="contenedor_horizontal">
                  <div class="grupo_selector">
                    <div class="titulo_categoria">
                      <label for="categoria">Categoría</label>
                    </div>
                    <select
                      class="form-control"
                      id="categoria"
                      value={categoriaId}
                      onChange={(e) => setCategoriaId(e.target.value)}
                    >
                      <option value="">Selecciona una categoría</option>
                      {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                          {categoria.nombre}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div class="grupo_selector">
                    <div class="titulo_tema">
                      <label for="tema">Tema</label>
                    </div>
                    <select
                      class="form-control"
                      id="tema"
                      value={temaId}
                      onChange={(e) => setTemaId(e.target.value)}
                    >
                      <option value="">Selecciona un tema</option>
                      {temas.map(
                        (
                          tema // Mapea los temas para generar las opciones
                        ) => (
                          <option key={tema.id} value={tema.id}>
                            {tema.nombre}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
              </form>
              <div className="modal-foote_s">
                <button className="btn_cancelar_1" onClick={toggleForm}>
                  Cancelar
                </button>
                <button
                  className="btn_crear"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Crear
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Publicacion;
