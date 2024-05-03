import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import logo5 from "../../assets/img/comentario.png";
import logo4 from "../../assets/img/flecha.png";
import logo3 from "../../assets/img/user.png";
import Header_home from "../Home/header_home";

import "./user_publicacion.css";

function User_publicacion() {
  const location = useLocation();
  const { publicacionData } = location.state || {};

  console.log([publicacionData, "comoo"]);

  return (
    <div className="padre_padre_user_public">
      <Header_home></Header_home>
      <div className="padre_user_publicaciones">
        <header className="padre_user_publicaciones_header">
          <div className="user_public_header">
            <nav className="uph_nav1">
              <p>
                {publicacionData[0].nombre_categoria} /{" "}
                {publicacionData[0].nombre_tema}
              </p>
              <Link to={"/home"}>
                <img src={logo4} className=""></img>
              </Link>
            </nav>
            <nav className="uph_nav2">
              <h1>{publicacionData[0].titulo} </h1>
              <h3>{publicacionData[0].sub_tema}</h3>
              <section>
                <nav className="nac11">
                  <nav className="nav11">
                    <img src={publicacionData[0].imagen_usuario}></img>
                    <span>{publicacionData[0].email_usuario}</span>
                  </nav>
                  <nav className="nav22">
                    <Link to={"/Comentarios"}>
                      <img src={logo5}></img>
                    </Link>

                    <p> 123</p>
                  </nav>
                </nav>
                <nav className="nac22">
                  {publicacionData[0].fecha_publicacion}
                </nav>
              </section>
            </nav>
          </div>
        </header>
        <body className="body_user_public">
          <img src={publicacionData[0].imagen_publicacion}></img>
          <text>{publicacionData[0].contenido}</text>
        </body>
      </div>
    </div>
  );
}

export default User_publicacion;
