import React from 'react'

const Spell = ({spell}) => {
  return (
    <div className='spell'>
        <p>{spell.name}</p>
        <small>{spell.description}</small>
    </div>
  )
}

export default Spell