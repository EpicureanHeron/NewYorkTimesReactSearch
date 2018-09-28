import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron/Jumbotron"
import { Input, FormBtn } from "../../Components/Form"

import Article from "../../Components/Article"
import SavedArticle from "../../Components/Savedarticle"
import API from "../../utils/API"


import "./Articlesearch.css";

class App extends Component {
  state = {
    results: {},
    topic: "",
    startYear: "",
    endYear: "",
    databaseResults: {}

  };

  handleInputChange = event => {
    const { name, value } = event.target;



    this.setState({
      [name]: value
    });
  };

  searchAPI = event => {


    //this code is a mess, should be a better way to do this.
    event.preventDefault()

    if (!this.state.topic) {
      alert("No Topic!")
    }

    else if (!this.state.startYear && !this.state.endYear) {
      API.searchNYT(this.state.topic, "19700101", "20181231")
        .then(res => this.setState({ results: res.data.response.docs }))


        .catch(err => console.log(err))
    }

    else if (!this.state.startYear && this.state.endYear) {
      API.searchNYT(this.state.topic, "19700101", this.state.endYear + "1231")
        .then(res => this.setState({ results: res.data.response.docs }))


        .catch(err => console.log(err))
    }

    else if (this.state.startYear && !this.state.endYear) {
      API.searchNYT(this.state.topic, this.state.startYear + "0101", "20181231")
        .then(res => this.setState({ results: res.data.response.docs }))


        .catch(err => console.log(err))
    }

    else if (this.state.startYear && this.state.endYear) {
      API.searchNYT(this.state.topic, this.state.startYear + "0101", this.state.endYear + "1231")
        .then(res => this.setState({ results: res.data.response.docs }))


        .catch(err => console.log(err))
    }


  }

  handleClick(title, link, date) {
    let articledata = {

      title: title,
      link: link,
      date: date

    }

    API.savearticle(articledata)

  }


  render = props => {
    return (
      <div>

        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col-md-12 searchDiv">
              <form className="searchForm"  >
                <p>Search Topic (required)</p>
                <Input
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                  name="topic"
                  placeholder="Topic"
                />
                <p>Start Year (optional)</p>
                <Input
                  value={this.state.startYear}
                  onChange={this.handleInputChange}
                  name="startYear"
                  placeholder="Start Year"
                />
                <p>End Year (optional)</p>
                <Input
                  value={this.state.endYear}
                  onChange={this.handleInputChange}
                  name="endYear"
                  placeholder="End Year"
                />
                <div  className="divcenter">
                  <FormBtn
                    // disabled={!(this.state.author && this.state.title)}
                    onClick={this.searchAPI}
                  >
                    Search
              </FormBtn>
              </div>
              </form>
            </div>
          </div>
          <div className="row">


            {this.state.results.length > 1 ? (

              <Article
                apiresults={this.state.results}
                handleClick={this.handleClick}
              />)
              :
              (<div></div>)
            }

            {/* <Article 
              articles={this.state.results}
              /> */}

          </div>
          <div className="row">
            <div className="col-md-12 searchDiv">
              <SavedArticle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
