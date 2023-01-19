import React, { useEffect } from 'react'
import { useState } from 'react'
import Character from './Character'

const Characters = ({ uri }) => {
    const [characters, setCharacters] = useState([])
    const fetchCharacters = () => {
        fetch(`https://hp-api.onrender.com/api/${uri}`).then(async response => {
            const data = await response.json()
            setCharacters(data)
        })
    }
    useEffect(fetchCharacters, [uri])
    return (
        <>
            {(uri === "spells") ? (characters && characters.map(spell => {
                return (
                    <>
                        <span>{spell.name}</span>
                        <span>{spell.description}</span>
                        <br />
                    </>
                )
            }))
                : (
                    <section className='characters'>
                        {(characters && characters.map((character, index) => {
                            return character.image && (
                                <Character key={index} character={character} />
                            )
                        })
                        )}
                    </section>)}
        </>
    )
}

export default Characters