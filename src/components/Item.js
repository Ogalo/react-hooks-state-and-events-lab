import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, ItemAdded] = useState(false);

  function handleCart() {
    ItemAdded((addCart)=> !addCart);
  }
 
  return (
    <li className={addCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
