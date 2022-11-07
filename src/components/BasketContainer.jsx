import React from "react";
import Basket from "./Basket";
import CheckoutForm from "./CheckoutForm";

function BasketContainer(props) {
  return (
    <section className="BasketContainer">
      <Basket cart={props.cart} removeFromCart={props.removeFromCart} />
      <CheckoutForm />
    </section>
  );
}

export default BasketContainer;
