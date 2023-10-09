import {createSlice} from '@reduxjs/toolkit'
import { Data } from '../Components/Data'


const initialState = {
    cart : [],
    items : Data,
    totalPrice : 0,
    totalQty : 1,
    adminOrder : []
}

const cartSlice = createSlice({
   name : 'cart',
   initialState,
   reducers : {
    addtocart : (state, action) => {
        const find = state.cart.findIndex((item) => item.id === action.payload.id)
        if(find >= 0){
            state.cart[find].quantity += 1
        }else{
            state.cart.push(action.payload)

        }
    },
    gettotalcart : (state) => {
       let {totalPrice, totalQty} = state.cart.reduce((cartTotal, cartItem) => {
                  let {price, quantity} = cartItem
                  let totalPrice = price * quantity
                  cartTotal.totalPrice += totalPrice
                  cartTotal.totalQty += quantity
                  return cartTotal
       },{totalPrice : 0, totalQty : 0})

       state.totalPrice = parseInt(totalPrice.toFixed(2))
       state.totalQty= totalQty
    },
    removecart : (state,action) => {
        state.cart = state.cart.filter((item, index) => item.id !== action.payload)
    },
    increaseQuantity : (state,action) => {
        state.cart = state.cart.map((item) => {
           
            if(item.id === action.payload) {
               return {...item, quantity : item.quantity+1}
            }
            return item
        })
    },
    decreaseQuantity : (state,action) => {
        state.cart = state.cart.map((item) => {
          
            if(item.id === action.payload) {
                if(item.quantity > 1){
                    return {...item, quantity : item.quantity-1}
                }
                
              else {
                return null
              }
            }
            return item
        })

        state.cart = state.cart.filter((item) => item !== null);
    },
    adminOrders : (state,action) =>  {
         state.adminOrder.push(action.payload)
    },
    removerOrder : (state,action) => {
        state.adminOrder = state.adminOrder.filter((item, i) => i !== action.payload)
    }
   }
})
export const {addtocart,gettotalcart,removecart,increaseQuantity,decreaseQuantity,adminOrders,removerOrder} = cartSlice.actions
export default cartSlice.reducer