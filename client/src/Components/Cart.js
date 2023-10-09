import * as React from "react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import ShoppingCart from "./Cart/ShoppingCart";
import OrderSummary from "./Cart/OrderSummary";

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.background.level1 : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),

  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
}));

const Cart = () => {
  return (
    <Grid
      container
      spacing={6}
      sx={{ flexGrow: 1 }}
      style={{ margin: "20px 0px 60px 20px" }}
      columns={{ xs: 6, sm: 6, md: 12 }}
    >
      <Grid xs={7}>
        <Item>
          <h1>Shopping</h1>
          <ShoppingCart />{" "}
        </Item>
      </Grid>
      <Grid xs={4}>
        <Item>
          <OrderSummary />
        </Item>
      </Grid>
    </Grid>
  );
};

export default Cart;
