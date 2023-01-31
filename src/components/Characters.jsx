import React, { useEffect } from "react";
import { useState } from "react";
import Character from "./Character";
import Spell from "./Spell";
import { Link } from "react-router-dom";

const Characters = ({ uri }) => {
  const [characters, setCharacters] = useState([]);
  const fetchCharacters = () => {
    fetch(`https://hp-api.onrender.com/api/${uri}`).then(async (response) => {
      const data = await response.json();
      setCharacters(data);
    });
  };
  useEffect(fetchCharacters, [uri]);
  return (
    <>
      {uri === "spells" ? (
        characters &&
        characters.map((spell) => {
          return <Spell spell={spell} key={spell.id} />;
        })
      ) : (
        <section className="characters">
          {characters &&
            characters.map((character, index) => {
              return (
                character.image ? (
                  <Character key={index} character={character} />
                ) : (
                    <Link className="character special" to={`/character/${character.name && character.name.split(' ').join('-')}`} key={index} >
                        <b>{character.name}</b>
                        <p>{character.actor}</p>
                    </Link>
                )
              );
            })}
        </section>
      )}
    </>
  );
};

export default Characters;
