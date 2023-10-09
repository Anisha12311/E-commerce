import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import '../Styles/Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../Reducer/CartSlice';
export default function Home() {

  const Data = useSelector((state) => state.allcart.items)
  const dispatch = useDispatch()
  return (
    <div className = "product_all">
      {Data?.map((item, index) => (
        <Card
          key={index}
          sx={{
            width : '320px',
            marginLeft: '20px',
            marginRight: '20px', 
            marginBottom: '20px',
            borderRadius: '20px',
          }}
        >
          <CardMedia
            image={item.img}
            sx={{ height: 290, borderRadius: '20px' }}
            title="green iguana"
          />
          <CardContent>
            <div className="truncate" component="div">
             {item.title}
            </div>
            <div className="price_product">₹ {item.price}</div>
          </CardContent>
          <div style={{ margin: '0 15px 15px 15px' }}>
            <div className="addcart" onClick = {() => dispatch(addtocart(item))}>Add to Cart</div>
          </div>
        </Card>
      ))}
   
    </div>
  );
}