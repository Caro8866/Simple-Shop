import React from "react";
import Basket from "./Basket";
import CheckoutForm from "./CheckoutForm";

function BasketContainer(props) {
  return (
    <section className="BasketContainer">
      <Basket cart={props.cart} removeFromCart={props.removeFromCart} />
    </section>
  );
}

export default BasketContainer;
