import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
        <ul className="header__ul">
            <Link className="header__link" to="/EventPage">Event Page</Link>
            <Link className="header__link" to="/OrderPage">Order Page</Link>
        </ul>
    </header>
  )
}

export default Header