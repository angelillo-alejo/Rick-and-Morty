
import React from "react";

const Search = ({ setSearch }) => {
  const searchBtn = (e) => {
    e.preventDefault();
    console.log(e)
  };
  return (
    <div className="input-group mb-3 gap-4 mb-5">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button" onClick = { searchBtn }>Button</button>
      </div>
      <input type="text" className="form-control" placeholder="Buscar" aria-label="" aria-describedby="basic-addon1" onChange = {(e) => { setSearch (e.target.value) }}/>
    </div>

  )
};

export default Search
  //1) Crear un estado para guardar los datos, por ejemplo: const [search, setSearch] = useState (‘ ‘);
  //2) Metodo de filtrado
  //3) Funcion de busqueda
  //4) Renderizamos la busqueda    
  
  // <form className= "d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
  // < input type = "text" placeholder = "BUSCAR" className = "form-control" onChange = {(e) => { setSearch(e.target.value) }}/>
  //   < button onClick = { searchBtn } className = "btn btn-primary fs-5" > Search</button >
  // </form >