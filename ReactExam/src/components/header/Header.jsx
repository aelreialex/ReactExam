import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping, faTicket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <header className="header">
        <ul className="header__ul">
            <FontAwesomeIcon onClick={ () => {navigate("/EventPage")}} className="header__link" icon={faTicket} style={{color: "rgb(116, 192, 252)", fontSize: 30}} />
            <Link className="header__link" to="/EventPage">Biljetter</Link>
            <FontAwesomeIcon onClick={ () => {navigate("/OrderPage")}} className="header__link" icon={faCartShopping} size="sm" style={{color: "rgb(116, 192, 252)", fontSize: 30}} />
            <Link className="header__link" to="/OrderPage">Kundvagn</Link>
        </ul>
    </header>
  )
}

export default Header