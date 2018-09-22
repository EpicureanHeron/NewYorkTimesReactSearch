import React, { Component } from "react";
import Jumbotron from "./Components/Jumbotron"
import Searchform from "./Components/Searchform"
import Navbar from "./Components/Navbar"
import Article from "./Components/Article"
import Savedarticle from "./Components/Savedarticle"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Searchform />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Article />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Savedarticle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
