import "./Crear_Publicacion.css";
import logo4 from "../../assets/img/mas.png";
import logo2 from "../../assets/img/user.png";


function CrearPublicacion() {
  return (
    <>
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
    </>
  );
}

export default CrearPublicacion;
