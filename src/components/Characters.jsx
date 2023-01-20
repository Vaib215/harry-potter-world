import React, { useEffect } from 'react'
import { useState } from 'react'
import Character from './Character'
import Spell from './Spell'

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
                    <Spell spell={spell} key={spell.id}/>
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