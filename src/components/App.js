
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";

const App = () => {

  return (
    <div>
      {/* Do not remove the main div */}
     
     <BrowserRouter>
      <Switch >
          <Route path="/" element={<ItemList />} />
          <Route path="/items/:id" element={<ItemDetails/>} />
        </Switch >
    </BrowserRouter>
    </div>
  )
}

export default App

