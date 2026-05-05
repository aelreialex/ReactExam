import { create } from "zustand";

export const useCartStore = create(set => ({
    cart : [],
    
    addToCart : (band, count) => {
        set(state => {
            const ticketInCart = state.cart.find(b => b.id === band.id);
            if(ticketInCart) {
                return {
                    cart : state.cart.map(b => {
                        if(b.id === band.id) {
                            return { ...b, quantity : b.quantity + count}
                        } else return b;
                    })
                }
            } else {
                return {
                    cart : [...state.cart, {...band, quantity : count}]
                }
            }
        })
    },

    addOneToCart : (id) => {
        set(state => {
            const ticketInCart = state.cart.find(b => b.id === id);
            if(ticketInCart) {
                return {
                    cart : state.cart.map(b => {
                        if(b.id === id) {
                            return { ...b, quantity : b.quantity + 1}
                        } else return b;
                    })
                }
            } else {
                return {
                    cart : [...state.cart, {...band, quantity : 1}]
                }
            }
        })
    },

    removeOneFromCart : (id) => {
        set(state => {
            const ticketInCart = state.cart.find(t => t.id === id);
            if(ticketInCart.quantity === 1) {
                return {
                    cart : state.cart.filter(t => t.id !== id)
                }
            } else {
                return{
                    cart : state.cart.map(b => {
                        if(b.id === id) {
                            return { ...b, quantity : b.quantity - 1}
                        } else return b;
                    })
                }
            }
        })
    }
}));