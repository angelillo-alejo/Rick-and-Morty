import React from 'react';

export function Characters(character) {
    return (
      <div className="text-center p-5">
        <h3>{character.name}</h3>
        <img src={character.image} alt={character.name} className="img-fluid" />
        <p>{`Origin: ${character.origin && character.origin.name}`}</p>
      </div>
    );
  }
  export default Characters;