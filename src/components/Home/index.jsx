import React from "react";
import Header_home from "./header_home";
import Publicacion from "./publicacion";
import "./index.css";

function Index(props) {
  return (
    <div className="padre">
      <div className="header_home">
        <Header_home />
      </div>
      <div className="publicaciones">
        <Publicacion />
        
      </div>
    </div>
  );
}

export default Index;
