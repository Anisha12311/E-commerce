import {configureStore} from '@reduxjs/toolkit'
import cartSlice  from '../src/Reducer/CartSlice'

const Store = configureStore({
    reducer : {
        allcart : cartSlice
     }
})

export default Store