import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CrearPublicacion() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="padre_create_p">
        <header>
          <nav>
            <h3>Nueva Publicacion</h3>
          </nav>
          <nav>
            <Button onClick={handleShow} variant="outline-primary">Crear Publicación</Button>
          </nav>
        </header>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Publicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="titulo">Título</label>
              <input type="text" className="form-control" id="titulo" />
            </div>
            <div className="form-group">
              <label htmlFor="sub_tema">Sub Tema</label>
              <input type="text" className="form-control" id="sub_tema" />
            </div>
            <div className="form-group">
              <label htmlFor="contenido">Contenido</label>
              <textarea className="form-control" id="contenido"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="imagen">Imagen</label>
              <input type="file" className="form-control-file" id="imagen" accept="images/*" />
            </div>
            <div className="form-group">
              <label htmlFor="categoria">Categoría</label>
              <select className="form-control" id="categoria">
                <option value="1">Selecciona un país</option>
                <option value="2">Estados Unidos</option>
                <option value="3">Canadá</option>
                <option value="4">México</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="tema">Tema</label>
              <select className="form-control" id="tema">
                <option value="1">Selecciona un país</option>
                <option value="2">Estados Unidos</option>
                <option value="3">Canadá</option>
                <option value="4">México</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={handleClose}>Crear</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CrearPublicacion;