import React from 'react'
import "./orderEventInfo.css"
import { useCartStore } from '../../hooks/useCartStore';

const OrderEventInfo = ({name, when, id, where, price, quantity, startWhen, endWhen}) => {
  const { addOneToCart, removeOneFromCart } = useCartStore();
  return (
    <article className="order__card">
        <section className="order__info">
            <h2 className="order__bandName">{name}</h2>
            <p className="order__playTime">{when} kl. {startWhen}-{endWhen}</p>
        </section>
        <div className="order__tickets">
            <button className="order__sub" onClick={ () => {removeOneFromCart(id)}}>-</button>
            <p className="order__howMany">{quantity}</p>
            <button className="order__add" onClick={ () => {addOneToCart(id)}}>+</button>
        </div>
    </article>
  )
}

export default OrderEventInfo