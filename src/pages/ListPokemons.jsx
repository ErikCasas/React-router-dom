import "../styles/ListPokemon.css";
import { useEffect, useState } from "react";
import {getAllPokemons} from '../JavaScript/data.js'
import Card from "../components/Card";
const ListPokemons = () => {

  const [data, setData]= useState([])

  //Cuando se monta el componente por primera vez, hacemos un llamado de todos
  //los datos y los guardamos en un estado local
  useEffect(() => {
    getAllPokemons().then(res =>setData(res))
  }, []);

  return (
    <>
      <div className="card-list-pokemon">
        {
          data.map(el=>(
            <Card key={el.id} data={el}/>
          ))
        }
      </div>
    </>
  );
};

export default ListPokemons;
