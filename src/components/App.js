
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route path="/items/:id" component={ItemDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
