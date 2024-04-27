import React from "react";
import "./publicaciones.css";
import logo4 from "../../assets/img/mas.png";
import logo2 from "../../assets/img/user.png";
function Publicacion() {
  return (
    <div className="publicaciones_">
      <div className="menu">
      <a href="./posts/Crear_Publicacion.jsx" type="button">
      <img src={logo4} alt="Logo" className="menu-icon" />
</a>
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

      <div className="card_home">
        <div className="card">
          <div className="info">
            <div className="user_img">
              <img src={logo2}></img>
              <nav className="nav">
                <samp>p4cman jose</samp>
                <samp>mapap@senati.pe</samp>
              </nav>
              <nav className="nac">16 / 04 / 2024</nav>
            </div>
            <div className="cont_info">
              <p>
                Proyecto real no fake empresariahhhhhhhhhhhhhhhllllllllllllllllllllllllllllllllllllllllllldssssss
                que son
                participes los alumnos de senati lamentablemente: trabajo
                asignado con el proposito de presentarlo y aprobar el ciclo,
                posdata tu prima
              </p>
              <nav>
                <button>Noticias</button>
                <button>Relaciones</button>
              </nav>
            </div>
          </div>
          <div className="img_card">
            <img src={logo2}></img>
          </div>
        </div>
      </div>
      <div className="card_home">
        <div className="card">
          <div className="info">
            <div className="user_img">
              <img src={logo2}></img>
              <nav>
                <samp>p4cman jose</samp>
                <samp>mapap@senati.pe</samp>
              </nav>
              <nav>16 / 04 / 2024</nav>
            </div>
            <div className="cont_info">
              <p>
                Proyecto real no fake empresarial del año en el que son
                participes los alumnos de senati lamentablemente: trabajo
                asignado con el proposito de presentarlo y aprobar el ciclo,
                posdata tu prima{" "}
              </p>
              <nav>
                <button>Noticias</button>
                <button>Relaciones</button>
              </nav>
            </div>
          </div>
          <div className="img_card">
            <img src={logo2}></img>
          </div>
        </div>
      </div>
      <div className="card_home">
        <div className="card">
          <div className="info">
            <div className="user_img">
              <img src={logo2}></img>
              <nav>
                <samp>p4cman jose</samp>
                <samp>mapap@senati.pe</samp>
              </nav>
              <nav>16 / 04 / 2024</nav>
            </div>
            <div className="cont_info">
              <p>
                Proyecto real no fake empresarial del año en el que son
                participes los alumnos de senati lamentablemente: trabajo
                asignado con el proposito de presentarlo y aprobar el ciclo,
                posdata tu prima{" "}
              </p>
              <nav>
                <button>Noticias</button>
                <button>Relaciones</button>
              </nav>
            </div>
          </div>
          <div className="img_card">
            <img src={logo2}></img>
          </div>
        </div>
      </div>
      <div className="card_home">
        <div className="card">
          <div className="info">
            <div className="user_img">
              <img src={logo2}></img>
              <nav>
                <samp>p4cman jose</samp>
                <samp>mapap@senati.pe</samp>
              </nav>
              <nav>16 / 04 / 2024</nav>
            </div>
            <div className="cont_info">
              <p>
                Proyecto real no fake empresarial del año en el que son
                participes los alumnos de senati lamentablemente: trabajo
                asignado con el proposito de presentarlo y aprobar el ciclo,
                posdata tu prima{" "}
              </p>
              <nav>
                <button>Noticias</button>
                <button>Relaciones</button>
              </nav>
            </div>
          </div>
          <div className="img_card">
            <img src={logo2}></img>
          </div>
        </div>
      </div>
      <div className="card_home">
        <div className="card">
          <div className="info">
            <div className="user_img">
              <img src={logo2}></img>
              <nav className="user">
                <samp>p4cman jose</samp>
                <samp>mapap@senati.pe</samp>
              </nav>
              <nav>16 / 04 / 2024</nav>
            </div>
            <div className="cont_info">
              <p>
                Proyecto real no fake empresarial del año en el que son
                participes los alumnos de senati lamentablemente: trabajo
                asignado con el proposito de presentarlo y aprobar el ciclo,
                posdata tu prima{" "}
              </p>
              <nav>
                <button>Noticias</button>
                <button>Relaciones</button>
              </nav>
            </div>
          </div>
          <div className="img_card">
            <img src={logo2}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publicacion;
