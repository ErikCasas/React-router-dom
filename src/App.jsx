import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ListPokemons from "./pages/ListPokemons";
import Error from "./components/Error";
import Header from "./components/Header";
import Detail from "./pages/Detail";

/**
 Para iniciar a utilizar react router no olvidemos que primero se debe instalar 

 ===> npm install react-router-dom <===

 documentación para LEER ==> https://reactrouter.com/en/main
*/

function App() {
  return (
    <>
      {/* Con BrowserRouter mantenemos sincronizado 
    nuestro proyecto con el espaciado de la URL del navegador   */}
      <BrowserRouter>
        {/* Este es un ejemplo de como podemos hacer que un componente 
      se renderice en todas las rutas de nuestra aplicación */}
        <Header />

        {/* Similar a un switch case decimos que vamos a definir las rutas*/}
        <Routes>
          {/*
           Y le decimos que componente o pagina mostrar en cada path
          el path puede ser lo que querramos, pero este debe ser descriptivo 
          */}
          <Route path="/" Component={ListPokemons} />
          <Route path="/about" Component={About} />
          {/* -------------------- */}

          {/* definimos una ruta dinamica con :param ==> inportantes los dos puntos ":" */}
          <Route path="/pokemon/:idPokemon" Component={Detail} />

          {/* -------------------- */}

          {/* Debido a que la URL es manipulable facilmente por el usuario mostramos un 
          mensaje de error en caso de no estar contemplada esa ruta */}
          <Route path="*" Component={Error} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
