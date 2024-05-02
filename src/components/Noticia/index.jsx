import React from "react";
import Header_home from "./header_home";
import Publicacion from "./publicacion";
import Nota from "./Nota";
import "./index.css";


function Index(props) {
  return (
    <div className="padre">
      <div className="header_home">
        <Header_home />
      </div>


      <div className="padre_2">
      <div className="publicaciones">
        <Publicacion /></div>

      
      

 
        <div className="padre_3">
      <div className="Cuadro">
        <Nota/></div></div>

        </div>
      </div>
  
  );
}

export default Index;
