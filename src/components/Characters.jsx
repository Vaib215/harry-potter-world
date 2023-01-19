import React, { useEffect } from 'react'
import { useState } from 'react'
import Character from './Character'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const fetchCharacters = () => {
        fetch('https://hp-api.onrender.com/api/characters').then(async response=>{
            const data = await response.json()
            setCharacters(data)
        })
    }
    useEffect(fetchCharacters, [])
  return (
    <section className='characters'>
        {characters && characters.map((character,index)=>{
            return character.image && (
                <Character key={index} character={character}/>
            )
        })}
    </section>
  )
}

export default Characters