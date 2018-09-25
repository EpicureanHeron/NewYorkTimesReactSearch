import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Articlesearch from "./Pages/Search/Articlesearch";
import Savedarticle from "./Pages/Saved/Savedarticle"


import Navbar from "./Components/Navbar";



const App = () => (
  <Router>
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Articlesearch} />
      <Route exact path="/saved" component={Savedarticle} />
      <Route exact path="/books/:id" component={Articlesearch} />
      <Route component={Articlesearch} />
    </Switch>
  </div>
  </Router>
);

export default App;