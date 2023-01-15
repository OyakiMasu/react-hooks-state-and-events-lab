import React, { useState } from "react";

function Item({ name, category }) {

   const [itemsList, setItems] = useState(false);

   function changeClick(){
    setItems((itemsList) => !itemsList);
  }
  
  const changes = itemsList ? "Add to Cart" : "Remove from Cart"

  
  //This is to change the text in li
  const itemsClass = {itemsList} ? "in-cart" : ""
  
  return (
    <li className={itemsClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeClick}>{changes}</button>
    </li>
  );
}

export default Item;
