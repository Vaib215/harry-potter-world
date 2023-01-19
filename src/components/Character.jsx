import React from "react";
import { Link } from "react-router-dom";

const Character = ({character}) => {
  return <Link to={`/character/${character.name.split(' ').join('-')}`} className="character">
    <img src={character.image} alt={character.name} />
    <b>{character.name}</b>
    <small>{character.actor}</small>
  </Link>;
};

export default Character;
