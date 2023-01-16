import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, setMode] = useState(true);

   function handleClick (){
    setMode((darkMode) => !darkMode);
  }
  
  const appClass = darkMode ? "App light" : "App dark"

  const modes = darkMode ? "Dark" : "Light"

  return (
    <div className= {appClass} >
      <header>
        <h2> Shopster </h2>
        <button onClick={handleClick}> {modes} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
