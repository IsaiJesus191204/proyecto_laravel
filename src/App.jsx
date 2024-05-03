import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Index from "./components/Home";
import Comentarios from "./components/posts/Comentarios";
import CrearPublicacion from "./components/posts/Crear_Publicacion";
//ss
import User_publicacion from "./components/posts/user_publicacion";
import Login from "./components/login/login";
import "./App.css";




function App() {
  return (
    <>
            <h1> Vite Prueba</h1>
<h1>{import.meta.env.VITE_API }</h1>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>

            <Route exact path="/home" element={<Index />}></Route>

            <Route exact path="/crear" element={<CrearPublicacion />}></Route>
    
            <Route
              exact
              path="/user_posts"
              element={<User_publicacion />}
            ></Route>
            <Route exact path="/Comentarios" element={<Comentarios />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
