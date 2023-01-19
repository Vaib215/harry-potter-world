import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <h1>Harry Potter World</h1>
        <nav>
            <ul>
                <li><Link to='/characters'>Characters</Link></li>
                <li><Link to='/students'>Students</Link></li>
                <li><Link to='/teachers'>Teachers</Link></li>
                <li><Link to='/spells'>Spells</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar