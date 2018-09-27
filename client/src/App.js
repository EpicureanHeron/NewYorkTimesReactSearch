import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Articlesearch from "./Pages/Search/Articlesearch";
import Saved from "./Pages/Saved/Saved"


import Navbar from "./Components/Navbar";



const App = () => (
  <Router>
  <div>
    <Navbar />
    <Switch>
      <Route path="/" component={Articlesearch} />
      <Route path="/saved" component={Saved} /> 
     {/* <Route exact path="/books/:id" component={Articlesearch} />
      <Route component={Articlesearch} /> */}
    </Switch>
  </div>
  </Router>
);

export default App;