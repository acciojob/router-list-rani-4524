
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";

const App = () => {

  const items = [
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" }
  ];

  return (
    <div>
      {/* Do not remove the main div */}
     
     <BrowserRouter>
      <Switch >
          <Route path="/" element={<ItemList  items={items}/>} />
          <Route path="/items/:id" element={<ItemDetails items={items}/>} />
        </Switch >
    </BrowserRouter>
    </div>
  )
}

export default App

