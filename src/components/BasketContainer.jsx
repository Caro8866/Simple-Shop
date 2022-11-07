import React from "react";
import Basket from "./Basket";
import CheckoutForm from "./CheckoutForm";

function BasketContainer() {
  return (
    <section className="BasketContainer">
      <Basket />
      <CheckoutForm />
    </section>
  );
}

export default BasketContainer;
