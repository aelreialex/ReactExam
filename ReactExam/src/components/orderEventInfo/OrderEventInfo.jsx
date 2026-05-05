import React from 'react'
import "./orderEventInfo.css"
import { useCartStore } from '../../hooks/useCartStore';
import { motion } from 'motion/react';

const OrderEventInfo = ({name, when, id, where, price, quantity, startWhen, endWhen}) => {
  const { addOneToCart, removeOneFromCart } = useCartStore();
  return (
    <article className="order__card">
        <section className="order__info">
            <h2 className="order__bandName">{name}</h2>
            <p className="order__playTime">{when} kl. {startWhen}-{endWhen}</p>
        </section>
        <div className="order__tickets">
            <motion.button alt="minus knapp" whileTap={{ scale: 0.75 }} transition={{ duration: 0.01 }} className="order__sub" onClick={ () => {removeOneFromCart(id)}}>-</motion.button>
            <p className="order__howMany">{quantity}</p>
            <motion.button alt="plus knapp" whileTap={{ scale: 0.75 }} transition={{ duration: 0.01 }} className="order__add" onClick={ () => {addOneToCart(id)}}>+</motion.button>
        </div>
    </article>
  )
}

export default OrderEventInfo