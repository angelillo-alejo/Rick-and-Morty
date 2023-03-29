import React from "react";


const Search = ({ setSearch }) => {
  
  const searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className= "d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5"
    >
      <input
        onChange={(e) => {
          
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className= ""
        type="text"
      />
      <button
        onClick={searchBtn}
        className="btn btn-primary fs-5"
      >
        Search
      </button>
    </form>
  );
};

export default Search
//1) Setear Hook useState
//2) Metodo de filtrado
//3) Funcion de busqueda
//4) Renderizamos la busqueda