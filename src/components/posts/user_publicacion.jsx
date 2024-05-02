import Header_home from "../Home/header_home";
import logo4 from "../../assets/img/flecha.png";
import logo3 from "../../assets/img/user.png";
import logo5 from "../../assets/img/comentario.png";
import { Link } from "react-router-dom";
import "./user_publicacion.css";

function User_publicacion() {
  return (
    <div className="padre_padre_user_public">
      <Header_home></Header_home>
      <div className="padre_user_publicaciones">
        <header className="padre_user_publicaciones_header">
          <div className="user_public_header">
            <nav className="uph_nav1">
              <p>NOTICIAS / Relaciones</p>
              <Link to={"/home"}>
                <img src={logo4} className=""></img>
              </Link>
            </nav>
            <nav className="uph_nav2">
              <h1>I Went on the Dark Web and Instantly Regretted It</h1>
              <h3>
                Ac anfa as ca ca sj calks cl ask lcas lk as dkas lcka slk la
                flaslfhkn gsdfdo doaso aod oas d aos doas d asd aslk dals{" "}
              </h3>
              <section>
                <nav className="nac11">
                  <nav className="nav11">
                    <img src={logo3}></img>
                    <span>mapap@senati.pe</span>
                  </nav>
                  <nav className="nav22">
                    <Link to={"/Comentarios"}>
                      <img src={logo5}></img>
                    </Link>

                    <p> 123</p>
                  </nav>
                </nav>
                <nav className="nac22">16 / 04 / 2024</nav>
              </section>
            </nav>
          </div>
        </header>
        <body className="body_user_public">
          <img src={logo3}></img>
          <text>
            que son participes los alumnos de senati lamentablemente: trabajo
            asignado con el proposito de presentarlo y aprobar el ciclo, posdata
            tu prima que son participes los alumnos de senati lamentablemente:
            trabajo asignado con el proposito de presentarlo y aprobar el ciclo,
            posdata tu prima que son participes los alumnos de senati
            lamentablemente: trabajo asignado con el proposito de presentarlo y
            aprobar el ciclo, posdata tu prima que son participes los alumnos de
            senati lamentablemente: trabajo asignado con el proposito de
            presentarlo y aprobar el ciclo, posdata tu prima que son participes
            los alumnos de senati lamentablemente: trabajo asignado con el
            proposito de presentarlo y aprobar el ciclo, posdata tu prima que
            son participes los alumnos de senati lamentablemente: trabajo
            asignado con el proposito de presentarlo y aprobar el ciclo, posdata
            tu prima
          </text>
        </body>
      </div>
    </div>
  );
}

export default User_publicacion;
