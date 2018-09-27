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

  loadArticles = () => {

    API.getArticles()

      .then(res => this.setState({ databaseResults: res.data }))

      .catch(err => console.log(err))

  }

  componentDidMount = () => {

    this.loadArticles()

  }


  handleClick(id) {

    API.deletearticle(id)
      .then(this.loadArticles())

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            {/* <Savedarticle /> */}
            {this.state.databaseResults.length > 1 ? (
              this.state.databaseResults.map(item =>
                <li key={item.title} className="list-group-item">
                  <a target="_blank" href={item.link}>{item.title}</a>
                  <p>{item.date}</p>
                  <button type="button" onClick={() => this.handleClick(item._id)} className="btn btn-danger">Delete</button>
                </li>)
            ) :
              (<div>Loading Articles</div>)
            }
          </div>
        </div>

      </div>
    );
  }
}

export default Savedarticle;
