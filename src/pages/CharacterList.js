import { useEffect, useState } from "react";
import Characters from "./Characters";
import Search from "../components/search/Search";

function NextPage({ page, setPage }) {
  return (
    <div className="container">
        <button type="button" disabled={page > page.length - 1}//Error
        className="btn btn-primary"
        onClick={() => setPage(page + 1)}
      >
        Page {page + 1}
      </button>
    </div>
  ); 
}
function BackPage({ page, setPage }) {
  return (
    <div className="constainer">
      <button type="button" disabled = {page <= 0}
      className="btn btn-primary" 
      onClick={() => setPage(page - 1) } 
      >
        Page {page - 1}
      </button>
    </div>

  )
}

export function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    const getCharacter = async () => {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${Search}` //name como dice la documentacion
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
      //console.log(results)
    };
    getCharacter();
  }, [page]);

  return (
    <div className="container">
      <NextPage page={page} setPage={setPage} />
      <BackPage page={page} setPage={setPage} />

      {loading ? (

        <div>Loading...</div>

      ) : (
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Characters
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterList;