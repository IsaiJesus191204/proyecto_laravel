import React, { useEffect, useState } from "react";

import "./User_list.css";

// Assuming you have styles for the user list

function UserList(props) {

  const [temas, setTemas] = useState([]);
   const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchTemas = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/tema");
        const data = await response.json();
        setTemas(data.message);
        console.log(data.message);
      } catch (error) {
        console.error("Error al obtener la lista de temas", error);
      }
    };

    fetchTemas();
  }, []);

    useEffect(() => {
      const fetchUsuarios = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/usuarios");
          const data = await response.json();
          setUsuarios(data.data);
          console.log(data.data);
        } catch (error) {
          console.error("Error al obtener la lista de temas", error);
        }
      };

      fetchUsuarios();
    }, []);




  const users = [
    { name: "Huasacca Smith", imageUrl: "src/img/Usuario.png" },
    { name: "Pinillos Shalon", imageUrl: "src/img/Usuario.png" },
    { name: "Benja Mhee-ko Gerrikho", imageUrl: "src/img/Usuario.png" },
    { name: "Carmen Miranda MeLa Rima", imageUrl: "src/img/Usuario.png" },
    { name: "Lola Buenas Lolas", imageUrl: "src/img/Usuario.png" },
    { name: "Boris Mexicano Escalante", imageUrl: "src/img/Usuario.png" },
    { name: "Yamir Blabberwocky", imageUrl: "src/img/Usuario.png" },
  ];

  const [numberOfCategoriesToShow, setNumberOfCategoriesToShow] = useState(4);
  const [isShowingAllCategories, setIsShowingAllCategories] = useState(false);

  const handleToggleCategoriesClick = () => {
    const newNumberOfCategoriesToShow = isShowingAllCategories
      ? 4
      : temas.length;
    setIsShowingAllCategories(!isShowingAllCategories);
    setNumberOfCategoriesToShow(newNumberOfCategoriesToShow);
  };

  const [numberOfUsersToShow, setNumberOfUsersToShow] = useState(3);
  const [isShowingAllUsers, setIsShowingAllUsers] = useState(false);

  const handleToggleUsersClick = () => {
    const newNumberOfUsersToShow = isShowingAllUsers ? 3 : users.length;
    setIsShowingAllUsers(!isShowingAllUsers);
    setNumberOfUsersToShow(newNumberOfUsersToShow);
  };

  return (
    <div className="padre_3_user_list">
      <section className="users_list">
        <h2>Usuarios</h2>
        <ul>
          {users.slice(0, numberOfUsersToShow).map((user) => (
            <li key={user.name}>
              <img
                src={user.imageUrl}
                alt={user.name}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/64x64";
                }}
              />
              <span className="name">{user.name}</span>
            </li>
          ))}
        </ul>
        <button onClick={handleToggleUsersClick} className="button-user">
          {isShowingAllUsers ? "Ver menos usuarios" : "Ver más usuarios"}
        </button>
      </section>

      <div className="categories-container ">
        <section className="categories">
          <h2>Temas</h2>
          <div className="category-list">
            {temas.slice(0, numberOfCategoriesToShow).map((tema) => (
              <div key={tema.id} className="category-item">
                <span className="category-name">{tema.nombre}</span>
              </div>
            ))}
          </div>
          <button
            onClick={handleToggleCategoriesClick}
            className="category-button"
          >
            {isShowingAllCategories ? "Ver menos temas" : "Ver mas temas"}
          </button>
        </section>
      </div>
    </div>
  );
}

export default UserList;
