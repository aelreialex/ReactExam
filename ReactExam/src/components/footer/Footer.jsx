import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping, faTicket } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
        <ul className="footer__ul">
            <FontAwesomeIcon className="footer__link" icon={faTicket} style={{color: "rgb(116, 192, 252)",}} />
            <Link className="footer__link" to="/EventPage">Biljetter</Link>
            <FontAwesomeIcon className="footer__link" icon={faCartShopping} size="sm" style={{color: "rgb(116, 192, 252)",}} />
            <Link className="footer__link" to="/OrderPage">Kundvagn</Link>
        </ul>
    </footer>
  )
}

export default Footer