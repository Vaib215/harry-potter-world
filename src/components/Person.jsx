import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Character from "./Character";

const Person = () => {
  const [person, setPerson] = useState([]);
  const id = useParams().id.split("-").join(" ");
  const data = useLoaderData();
  useEffect(() => {
    const personData = data.filter((person) => person.name === id)[0];
    setPerson(personData);
    console.log(personData);
  }, [id]);
  return (
    <div className="person">
      {
        person.image ? (
          <Character character={person}/>
        ) : (
          <div className="character special">
            <b>{person.name}</b>
            <p>{person.actor}</p>
          </div>
        )
      }
      <div className="info">
        {person.yearOfBirth && (
          <div>
            Year Of Birth: <span>{person.yearOfBirth}</span>
          </div>
          
        )}
        {person.house && (
          <div>
            House: <span>{person.house}</span>
          </div>
          
        )}
        {person.gender && (
          <div>
            Gender: <span>{person.gender}</span>
          </div>
          
        )}
        {person.hairColour && (
          <div>
            Hair Colour: <span>{person.hairColour}</span>
          </div>
          
        )}
        {person.eyeColour && (
          <div>
            Eye Colour: <span>{person.eyeColour}</span>
          </div>
          
        )}
        {person.species && (
          <div>
            Species: <span>{person.species}</span>
          </div>
          
        )}
        {person.patronus && (
          <div>
            Patronus: <span>{person.patronus}</span>
          </div>
          
        )}
        <div>
          Wizard: <span>{person.wizard ? "True" : "False"}</span>
        </div>
        
      </div>
    </div>
  );
};

export default Person;
