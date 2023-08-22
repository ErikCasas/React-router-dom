import { useParams } from "react-router-dom";
import "../styles/Detail.css";
import { useEffect, useState } from "react";
import { getPokemonById } from "../JavaScript/data";
const Detail = () => {

  // Extraemos ese param que definimos en el comopnente App.jsx
  //que sería pokemons/:idPokemon
  //ya con el id, el cual es una dato relevante, podemos iniciar a trabajar 
  //como lo vemos en el useEffect de este componente


  //useParamas es un hook que nos permite extraer ese idPokemon de la URL
  const { idPokemon } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    // fetch(URL/idPokemon) ==> simulamos un llamado a una API, utilizando datos quemados
      getPokemonById(idPokemon).then((res) => setData(res));
  }, [idPokemon]);

  //al iniciar el montaje del comoponente, los datos pueden ser nulos por un instante 
  //o simplemente no se encontró el pokemon con x id
  //para ello dejamos  un mensaje de cargando para que no nos rompa
  //nuestro proyecto

  if (!data) {
    //pueden implementar el siguieten código en el useEffect
    //para que se simule un comportamiento de carga
    
    // setTimeout(() => {
    //   getPokemonById(idPokemon).then((res) => setData(res));
    //   }, 5000);

    return (
      //reutilicé un estilo para hacerlo un poco mas estetico
      <>
        <div className="info-pokemon">
          <h1>No se ha encontrado ningun pokemon :C</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container-pokemon">
        <div className="info-pokemon">
          <h1>Te presento a {data.name}</h1>
          <img src={data.image} />
          <p>su tipo es {data.type}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
