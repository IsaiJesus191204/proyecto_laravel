import logo2 from "../../assets/img/user.png";

import "./publicaciones.css";

function Publicacion_card({
  id,
  imagen_usuario,
  imagen_publicacion,
  nombre_usuario,
  email_usuario,
  fecha_publicacion,
  sub_tema,
  nombre_tema,
  nombre_categoria,
}) {
  // const [publicacionData, setPublicacionData] = useState(null);

  // const handleclick = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://127.0.0.1:8000/api/publicaciones/${id}`
  //     );
  //     const data = await response.json();

  //     setPublicacionData(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  return (
    
    <>
      <div id={id} className="card_home" >
        <div className="card_public">
          <div className="info_">
            <div className="user_img">
              <img src={imagen_usuario || logo2} alt="User" />
              <nav className="nav">
                <samp>{nombre_usuario}</samp>
                <samp>{email_usuario}</samp>
              </nav>
              <nav className="nac">{fecha_publicacion}</nav>
            </div>
            <div className="cont_info">
              <p>{sub_tema}</p>
              <nav>
                <button>{nombre_tema}</button>
                <button>{nombre_categoria}</button>
              </nav>
            </div>
          </div>
          <div className="img_card">
            <img src={imagen_publicacion || logo2} alt="Publicacion" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Publicacion_card;
