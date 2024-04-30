import logo2 from "../../assets/img/user.png";
import logo3 from "../../assets/img/user.png";

function Comentarios() {
  return (
    <>
      <div>
        <header>
          <section>
            <h1>Publicacion de pacman jose</h1>
            <img src={logo2}></img>
          </section>
          <section>
            <div className="user_img">
              <img src={logo3}></img>
              <nav className="nav">
                <samp>mapap@senati.pe</samp>
              </nav>
              <nav>
                <p> 123</p>
              </nav>
              <nav className="nac">16 / 04 / 2024</nav>
            </div>
          </section>
        </header>
        <body></body>
      </div>
    </>
  );
}

export default Comentarios;
