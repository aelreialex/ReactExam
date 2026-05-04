import React from 'react'
import logo from '../../assets/img/logo.png';
import "./landingPage.css"
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const navigate = useNavigate();
  
  function swap() {
      navigate("/EventPage")
  }

  setTimeout(swap, 1500)

  return (
    
    <div className="landingPage">
      <img className="landingPage__logo" src={logo}></img>
      <h1 className="landingPage__heading">Where it's @</h1>
      <h2 className="landingPage__slogan">Ticketing made easy!</h2>
    </div>
  )
}

export default LandingPage