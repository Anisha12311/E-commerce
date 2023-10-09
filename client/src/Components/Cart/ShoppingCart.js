import React from "react";

import QuantityProduct from "./QuantityProduct";
import { useDispatch, useSelector } from "react-redux";
import {  removecart } from "../../Reducer/CartSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "../../Styles/Cart.css";
import '../../Styles/Home.css'
const ShoppingCart = () => {
  const { cart } = useSelector(
    (state) => state.allcart
  );

  const dispatch = useDispatch();
  return (
    <div>
      {cart.map((item, index) => (
        <>
          <div style={{ border: "1px solid #e9e5e5", marginTop: "20px" }}></div>

          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            key={index}
          >
            <div style={{ display: "flex" }}>
              <img width={170} height={170} alt="" src={item.img} />

              <div
                style={{
                  marginLeft: "30px",
                  padding: 0,
                  textAlign: "left",
                  lineHeight: "2rem",
                }}
              >
                <div style={{ color: " #212121", fontSize: "16px" }}>
                  {item.title}
                </div>
                <div style={{ display: "flex" }}></div>
                <h2
                  style={{
                    justifyContent: "left",
                    margin: 0,
                    fontSize: "20px",
                  }}
                >
                  ₹ {item.price}
                </h2>

                <QuantityProduct totalQty={item.quantity} id={item.id} />
              </div>
            </div>
            <div className="deletecart">
              <DeleteOutlineIcon
                onClick={() => dispatch(removecart(item.id))}
                style={{ width: 34, height: 35, margin: "20px 10px 10px 10px" }}
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ShoppingCart;
