
import React from "react";

const Search = ({ setSearch }) => {
  const searchBtn = (e) => {
    e.preventDefault();
    setSearch (e.target.value)
    console.log(setSearch)
  };
  return (
      <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <button className="btn btn-primary" type="button" onClick = { searchBtn }>Button</button>
      <input type="text" className="form-control" placeholder="Buscar" aria-label="" aria-describedby="basic-addon1" onChange = {(e) => { setSearch(e.target.value) }}/>
      </form>
  )
};

export default Search
  //1) Crear un estado para guardar los datos, por ejemplo: const [search, setSearch] = useState (‘ ‘);
  //2) Metodo de filtrado
  //3) Funcion de busqueda
  //4) Renderizamos la busqueda    
