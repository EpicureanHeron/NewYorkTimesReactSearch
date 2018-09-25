import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron/Jumbotron"
import { Input, FormBtn } from "../../Components/Form"
import Navbar from "../../Components/Navbar"
import Article from "../../Components/Article"

import API from "../../utils/API"

//import "./App.css";

class Savedarticle extends Component {
  state = {

    databaseResults: {}

  };


  componentDidMount = () => {

    API.getArticles()
      .then(res => this.setState({ databaseResults: res.data }))
      //  .then(res => this.setState(databaseResults => ({
      //   databaseResults: [...this.state.databaseResults, res.data]})))
      // .then(res=> console.log(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>

        <Jumbotron />
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              {/* <Savedarticle /> */}
              {this.state.databaseResults.length > 1 ? (
                this.state.databaseResults.map(item =>
                  <li key={item.title} className="list-group-item">
                    <a target="_blank" href={item.link}>{item.title}</a>
                    <p>{item.date}</p>

                  </li>)
              ) :
                (<div>Not loaded</div>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Savedarticle;
