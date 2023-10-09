import React from 'react'
import IconButton from '@mui/joy/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../../Styles/Cart.css'
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../../Reducer/CartSlice';
const QuantityProduct = (props) => {
  console.log("Props",props)
  const dispatch = useDispatch()
  return (
    <div style = {{display : 'flex'}}>
      <div style = {{ color : 'gray'}}>Qty : 
      
       </div>
    
       <div style = {{display : 'flex' , margin:'5px'}}>
      <div className = "cart-btn">
      <RemoveIcon style = {{width : 18}} onClick = {() => dispatch(decreaseQuantity(props.id))} />
      </div>
      <div className = "cart-btn">
       <span style = {{
        paddingTop : '6px'}}>{props.totalQty}</span> 
      </div>
      <div className = "cart-btn">
      <AddIcon style = {{width : 18}} onClick = {() => dispatch(increaseQuantity(props.id))} />
      </div>
      </div>
         
      
    </div>
  )
}

export default QuantityProduct
