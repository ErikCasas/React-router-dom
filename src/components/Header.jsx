import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  // Como hemos visto en las clases de HTML podemos
  // utilizar la etiqueta <a> para navegar entre las
  // distintas rutas de nuestro proyecto, react-router
  // nos da una herramienta de funcionamiento similar, pero
  // sin efectos secundarios que tendriamos que prevenir de forma manual
  return (
    <>
      <div className="header-container">
        <h1 className="tittle">lista de pokemons</h1>
        <ul className="navigate">
          <li>
            {/*con la etiqueta <a> podemon realizar acciones similares que con <Link/> pero con efectos secundarios */}
            <a href="/lola">ruta </a>
          </li>
          <li>
            <Link to="/">inicio</Link>
          </li>

          <li>
            <Link to="/about">sobre nosotros</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
