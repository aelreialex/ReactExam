import React from 'react'
import { useCartStore } from '../../hooks/useCartStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "./ticketPage.css"
import { EffectCards } from 'swiper/modules';

import Ticket from '../../components/ticket/Ticket';

const TicketPage = () => {
      const { cart } = useCartStore();
      const finalTickets = [];
      console.log(cart)
      
      cart.map(ticket => { 

        const seatNumber = Math.floor(Math.random() * 50)
        const test = Math.floor(Math.random() * 14 )
        const radArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N']
  
          for( let i = 0; i < ticket.quantity; i++){
              console.log(ticket)
              const newTicket = {
                ...ticket,
                id: crypto.randomUUID(),
                seatNumber: seatNumber + i, 
                section : radArray[test]
            };
            
            finalTickets.push(newTicket);
            
          }
      });
      if (!finalTickets) return <div>laddar</div>
  return (
    <div className="tickets">
    <Swiper         
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">
          
      {finalTickets.map((ticket, index) => (
        <SwiperSlide>
          <Ticket id={ticket.id} where={ticket.where} seatNumber={ticket.seatNumber + 1} section={ticket.section} name={ticket.name} whenDate={ticket.when.date} whenFrom={ticket.when.from} whenTo={ticket.when.to}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default TicketPage