import React from 'react'
import { useCartStore } from '../../hooks/useCartStore';

const TicketPage = () => {
      const { cart } = useCartStore();
      const finalTickets = [];
      console.log(cart)
      cart.map(ticket => { 

        const seatNumber = Math.floor(Math.random() * 50)
  
          for( let i = 0; i < ticket.quantity; i++){
              console.log(ticket)
              const newTicket = {
                ...ticket,
                id: crypto.randomUUID(),
                seatNumber: seatNumber + i
            };
            
            finalTickets.push(newTicket);
            
          }
      });
      if (!finalTickets) return <div>laddar</div>
  return (
    <div><button onClick={ () => {console.log(finalTickets)}}>test</button>
    {finalTickets.map(t => (
                <p key={t.id}>{t.name} - Plats {t.seatNumber}</p>
    ))}</div>
  )
}

export default TicketPage