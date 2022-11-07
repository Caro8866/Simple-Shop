import React from "react";

function Product(props) {
  return (
    <article className="Product">
      <h2>{props.productdisplayname}</h2>
      <p>{props.price} ,-</p>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`} alt={props.productdisplayname} />
      <button>Add to basket</button>
    </article>
  );
}

export default Product;
