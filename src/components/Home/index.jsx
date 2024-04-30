import React from "react";

import Header_home from "./header_home";
import Publicacion from "./publicacion";
import User_index from "./user_index";

import "./index.css";

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
