import * as React from 'react';
import '../../Styles/UserOrder.css'
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux';
import { removerOrder } from '../../Reducer/CartSlice';
const AdminUser = () =>  {
  const dispatch = useDispatch()

 const {adminOrder} = useSelector((state) => state.allcart)
 console.log("Admin", adminOrder)
  return (
   <div className="containers">
    <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-2"> Id</div>
      <div className="col col-2">Total Quantity</div>
    
      <div className="col col-2">Discount Code</div>
      <div className="col col-2">Discount Price</div>
      <div className="col col-2">Total</div>
      <div className="col col-2">Remove</div>
    </li>
    {
      adminOrder?.map((item,i) => (
        <li className="table-row" key = {i}>
        <div className="col col-2" data-label="Id">{i+1}</div>
        <div className="col col-2" data-label="Total Quantity">{item.totalQty}</div>
        <div className="col col-2" data-label="Discount Code ">{item.discountCodes || 'No discount'}</div>
        <div className="col col-2" data-label="Discount Price">{item.totalDiscountAmount}</div>
        <div className="col col-2" data-label="Total">{item.totalPrice}</div>
        <div className="col col-2" data-label="Amount" onClick = {() => dispatch(removerOrder(i))}><ClearIcon/></div>
       
      </li>
     
      ) )
    }
   
  </ul>
  </div>          
  );
}

export default AdminUser
