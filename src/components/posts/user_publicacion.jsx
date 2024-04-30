import Header_home from "../Home/header_home";
import logo4 from "../../assets/img/mas.png";
import logo3 from "../../assets/img/user.png";
import logo5 from "../../assets/img/comentario.png";
import { Link } from "react-router-dom";

function User_publicacion() {
  return (
    <>
      <div>
        <Header_home></Header_home>

        <header>
          <div>
            <nav>
              <p>NOTICIAS / Relaciones</p>
              <img src={logo4}></img>
            </nav>
            <nav>
              <h1>I Went on the Dark Web and Instantly Regretted It</h1>
              <h3>
                Ac anfa as ca ca sj calks cl ask lcas lk as dkas lcka slk la
                flaslfhkn gsdfdo doaso aod oas d aos doas d asd aslk dals{" "}
              </h3>
              <section>
                <div className="user_img">
                  <img src={logo3}></img>
                  <nav className="nav">
                    <samp>mapap@senati.pe</samp>
                  </nav>
                  <nav>
                    <Link to={"/Comentarios"}>
                      <img src={logo5}></img>
                    </Link>

                    <p> 123</p>
                  </nav>
                  <nav className="nac">16 / 04 / 2024</nav>
                </div>
              </section>
            </nav>
          </div>
        </header>
        <body>
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
    </>
  );
}

export default User_publicacion;
