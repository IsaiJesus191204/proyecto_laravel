// MiComponente.js
import React from "react";
// import logo from "../../assets/img/logo.png";
import logo2 from "../../assets/img/user.png";
import logo3 from "../../assets/img/audi.png";
import "./header_home.css";
function Header_home(props) {
  return (
    <div className="padre_home">
      <div className="head_home">
        <div className="logo">
          <a href="" className="">
            <img src={logo3} className=""></img>
          </a>
        </div>
        <div className="busqueda ">
          <form class="max-w-full mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="buscar"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className="user_box flex items-center">
        <p className=" mr-4 text-1xl">Luis Nieble - Estudiante</p>
        <div className="user  rounded-full flex items-center justify-center ">
          <img src={logo2} className="  rounded-full"></img>
        </div>
      </div>
    </div>
  );
}

export default Header_home;
