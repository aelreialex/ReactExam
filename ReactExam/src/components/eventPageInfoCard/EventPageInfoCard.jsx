import React, { useEffect, useState } from 'react'
import { useTickets } from '../../hooks/useStoreTickets';
import { useParams } from 'react-router-dom';
import "./eventPageInfoCard.css"
import { motion } from 'motion/react';
import { useCartStore } from '../../hooks/useCartStore';
import { toast, Toaster } from 'react-hot-toast';


const EventPageInfoCard = () => {
    const bands = useTickets(state => state.tickets.events);
    const carts = useTickets(state => state.cartTickets);
    const { isLoading, isError } = useTickets(); 
    const { addToCart, cart } = useCartStore();
    const [band, setBand] = useState();
    const [count, setCount] = useState(0);
    const test = useParams();

    const notify = () => toast.success('Biljetter har lagts till i din kundvagn!');
   
    function add(){
        const test = count + 1;
        return setCount(test)
    }

    function sub(){
        if( count > 0){
            const test = count - 1;
            return setCount(test)
        }
    }

    // console.log(test);

    useEffect(() => {
        // console.log(bands)
       const band = bands.find( b => b.id == test.id)

       if(band) {
        return setBand(band)
       }
    },[bands])

    if (isLoading ) return <div>Laddar data...</div>;
    if (isError) return <div>Något gick fel.</div>;
    if (!band) return <div>Hittar rätt band...</div>

  return (
        <motion.main initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="eventInfo">
            <h1 className="eventInfo__heading">Event</h1>
            <p className="eventInfo__slogan">You are about to score<br></br>some tickets to</p>
            <div className="eventInfo__box">
                <h2 className="eventInfo__band">{band.name}</h2>
                <p className="eventInfo__date">{band.when.date} kl {band.when.from} - {band.when.to}</p>
                <p className="eventInfo__where">@ {band.where}</p>
            </div>

            {/* bara en counter */}
            <div className="eventInfo__tickets">
                <h2 className="eventInfo__totalPrice">{count * band.price} sek</h2>
                <motion.p whileTap={{ scale: 0.75 }} transition={{ duration: 0.01 }} onClick={sub} className="eventInfo__sub">-</motion.p>
                <p className="eventInfo__howMany">{count}</p>
                <motion.p whileTap={{ scale: 0.75 }} transition={{ duration: 0.01 }} onClick={add} className="eventInfo__add">+</motion.p>
            </div>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} onClick={ () => {if(count > 0) {{addToCart(band, count), setCount(0), console.log(cart), notify()}}}} className="eventInfo__addButton">Lägg i varukorgen</motion.button>
        </motion.main>
  )
}

export default EventPageInfoCard