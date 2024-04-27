import React from "react";
import Header_home from "./header_home";
import Publicacion from "./publicacion";
import "./index.css";
import User_index from "./user_index";

function Index(props) {
  return (
    <div className="padre">
      <div className="header_home">
        <Header_home />
      </div>


      <div className="padre_2">
      <div className="publicaciones">
        <Publicacion />
      </div>

      <div className="User_categoria_list">
        <User_index />
      </div>

      </div>
      
    </div>
    
  );
}

export default Index;
