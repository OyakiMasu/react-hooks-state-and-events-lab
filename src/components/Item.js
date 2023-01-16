import React, { useState } from "react";

function Item({ name, category }) {
   //The useState for the current items
   const [itemsList, setItems] = useState(false);

   //

     
  //Function catering for the button
   function changeClick(){
    setItems((itemsList) => !itemsList);
  }
  //Changes the text of the button
  let changes = itemsList ? "Add to Cart" : "Remove from Cart"

  
  const itemsClass = itemsList ?"in-cart": ""
  
  return (
    <li className={itemsClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick= { changeClick }> {changes} </button>
    </li>
  );
}

export default Item;
