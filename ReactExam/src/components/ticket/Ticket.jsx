import React from 'react'
import "./ticket.css"

const Ticket = ({id, where, whenDate, whenTo, whenFrom, name, seatNumber, section}) => {
  const test = id.toUpperCase();
  
  return (
    <article className="ticket">
      <div className="ticket__topBox">
        <p className="ticket__textWhat">WHAT</p>
        <h1 className="ticket__name">{name}</h1>
      </div>
      <div className="ticket__secBox">
        <p className="ticket__textWhere">WHERE</p>
        <h2 className="ticket__where">{where}</h2>
      </div>
      <div className="ticket__date">
        <p className="ticket__textWhen">WHEN <span className="ticket__whenDate">{whenDate.substring(0, 6)}</span></p>
        <p className="ticket__textFrom">FROM <span className="ticket__whenFrom">{whenFrom}</span></p>
        <p className="ticket__textTo">TO <span className="ticket__whenTo">{whenTo}</span></p>
      </div>
      <section className="ticket__thirdBox">
        <p className="ticket__textInfo">INFO</p>
        <h3 className="ticket__section">Section {section} - seat {seatNumber}</h3>
      </section>
      <div className="ticket__code">
        <p className="ticket__barCode">asdas</p>
        <p className="ticket__idCode">#{test.substring(0, 5)}</p>
      </div>
    </article>
  )
}

export default Ticket