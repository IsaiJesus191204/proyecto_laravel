import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Index from "./components/Noticia";
import "./App.css";

function App() {
  return (
    <>
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
