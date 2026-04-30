import React from 'react'
import "./eventGridInfoCard.css"
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"

const EventGridInfoCard = ({name , when, id, where, price, startWhen, endWhen}) => {
const navigate = useNavigate();

function handleSinglePage() {
    navigate(`/EventInfoPage/${id}`, { replace: true });
}

   const dates = when.split(' ')
   console.log(dates)
   const date = dates[1].substring(0, 3);

  return (
    <motion.article initial={{ scale: 0.9 }} animate={{ scale: 1 }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} onClick={handleSinglePage} className="eventInfoCard">
        <motion.section className="eventInfoCard__date">
            <p className="eventInfoCard__date-number">{dates[0]}</p>
            <p className="eventInfoCard__date-month">{date}</p>
        </motion.section>
        <div className="eventInfoCard__gig">
            <h2 className="eventInfoCard__band">{name}</h2>
            <p className="eventInfoCard__place">{where}</p>
            <p className="eventInfoCard__time">{startWhen}-{endWhen}<span className="eventInfoCard__price"> {price} kr</span></p>
        </div>
    </motion.article>
  )
}

export default EventGridInfoCard