import React, { useEffect, useState } from "react";
import "../../Styles/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { adminOrders, gettotalcart } from "../../Reducer/CartSlice";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import '../../Styles/Home.css'
import { useNavigate } from "react-router-dom";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const OrderSummary = () => {
  const dispatch = useDispatch();


  const [input, setInput] = useState("");
  const [open, setOpen] = React.useState(false);
  const [vaildCode, setVaild] = useState(false)
  const [total, setTotal] = useState(0)
  const [applydata, setApplydata] = useState('')
  const navigate = useNavigate()
  const { cart, items, totalPrice, totalQty } = useSelector(
    (state) => state.allcart
  );


  useEffect(() => {
    dispatch(gettotalcart());
  }, [cart]);
console.log("LOgs")
  const handleApply = async () => {
    const fetchApi = await axios.post("http://localhost:4000/discount", {
      code : input
    });
    const data = fetchApi.data;
    console.log(data);
    setVaild(data.vaild)
    setOpen(false);

  };
console.log("Data main")

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function checkoutAPI () {
      const fetchApi = await axios.post("http://localhost:4000/checkout", {
        totalPrice,
        vaildDiscount:vaildCode
      });
      const data = fetchApi.data;
      console.log(data);
      setTotal(data.totalPrice)
    }
    checkoutAPI()
  },[totalPrice,vaildCode])

  const handleSubmit = () => {
    const newAdminOrder = {
      totalQty:totalQty,
      totalPrice: Math.floor(total), 
      discountCodes: input,
      totalDiscountAmount: Math.floor(totalPrice-total)
    };
    dispatch(adminOrders(newAdminOrder))

    navigate('/admin')

  }
  return (
    <>
      <div style={{ margin: "0px 20px 0px 20px" }}>
        <div className="applycoupon" onClick={handleClickOpen}>
          {" "}
          <DiscountOutlinedIcon style={{ marginTop: "5px" }} />{" "}
          <div style={{ marginLeft: "10px", fontSize: "16px" }}>
           {vaildCode ? <div style = {{color : 'green'}}>Offered applied on the bill</div>:'Apply Coupon'}
          </div>
        </div>
        <h2>Order Summary</h2>

        <div
          style={{
            justifyContent: "space-between",
            alignItems: "left",
            display: "flex",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          <div>Subtotal </div>
          <div>₹ {totalPrice}</div>
        </div>
        <div
          style={{
            justifyContent: "space-between",
            alignItems: "left",
            display: "flex",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          <div>Coupon Discount </div>
          <div>{total !== 0 ? `- ₹ ${Math.floor(totalPrice-total)}`:` ₹ 0`}</div>
        </div>

        <div
          style={{ border: "1px solid #e9e5e5", margin: "20px 0px 0px 0px" }}
        ></div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            fontSize: "20px",
          }}
        >
          <h3>Total </h3>
          <h3>₹ {Math.floor(total)}</h3>
        </div>
        <div className="addcart" onClick = {handleSubmit}>Continue To Checkout</div>
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Discount Coupons
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className="coupontext">
            <div className="couponinput">
              <input
                className="couponcode"
                placeholder="Enter coupon code"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="btn-s3">
              <span className="btn-apply" onClick={handleApply}>
                Apply
              </span>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};

export default OrderSummary;
