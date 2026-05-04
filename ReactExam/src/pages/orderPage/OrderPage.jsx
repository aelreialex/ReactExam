import React from 'react'
import { useStore } from 'zustand';
import { useCartStore } from '../../hooks/useCartStore';
import OrderEventInfo from '../../components/orderEventInfo/OrderEventInfo';
import "./orderPage.css"
import { motion } from 'motion/react';
import { useNavigate } from "react-router-dom";


const OrderPage = () => {
  const { addOneToCart, cart } = useCartStore();
  console.log(cart)

  const navigate = useNavigate();

  const fullPrice = cart.reduce((acc, tickets) => acc + tickets.price * tickets.quantity, 0)

  console.log(fullPrice)

  return (
    <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="order">
      <h1 className="order__heading">Order</h1>
        {cart?.map(({name, when, id, where, price, quantity}) => (
          <OrderEventInfo quantity={quantity} name={name} price={price} where={where} when={when.date} startWhen={when.from} endWhen={when.to} key={id} id={id}/>
        ))}
      <p className="order__total">Totalt värde på order</p>
      <h3 className="order__totalText">{fullPrice} sek</h3>
      <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} onClick={ () => {navigate("/TicketPage")}} className="order__button">Skicka order</motion.button>
    </motion.div>
  )
}

export default OrderPage