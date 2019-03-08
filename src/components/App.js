import React from "react";
import Welcome from "./Welcome";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Welcome} />
    </BrowserRouter>
  );
}

export default App;
