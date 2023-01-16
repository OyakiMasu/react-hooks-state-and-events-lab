import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //The useState 
  const [categoryFilter, setCategory] = useState("All")

  //This is for the bar for changing the category 
   function handleChange(event){
   setCategory(event.target.value)
   }
     
//Function catering for the filter by category
  const itemsDisplay = items.filter((item) => {
    if (categoryFilter === "All"){
      return true ;
    } else {
      return item.category === categoryFilter;
    }
  
  })
  


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={categoryFilter} onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsDisplay.map((item) => (
          <Item key={item.id} name={item.name} categoryFilter={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
