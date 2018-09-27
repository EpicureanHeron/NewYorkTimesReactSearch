import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron/Jumbotron"
import { Input, FormBtn } from "../../Components/Form"

import Article from "../../Components/Article"
import SavedArticle from "../../Components/Savedarticle"
import API from "../../utils/API"
import { Link, Route } from "react-router-dom";

//import "./App.css";

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

    if(!this.state.topic){
      alert("No Topic!")
    }

    else if(!this.state.startYear && !this.state.endYear){
      API.searchNYT(this.state.topic, "19700101", "20181231")
      .then(res => this.setState({ results: res.data.response.docs }))


      .catch(err => console.log(err))
    }

    else if(!this.state.startYear && this.state.endYear){
      API.searchNYT(this.state.topic, "19700101", this.state.endYear + "1231")
      .then(res => this.setState({ results: res.data.response.docs }))


      .catch(err => console.log(err))
    }

    else if(this.state.startYear && !this.state.endYear){
      API.searchNYT(this.state.topic, this.state.startYear + "0101", "20181231")
      .then(res => this.setState({ results: res.data.response.docs }))


      .catch(err => console.log(err))
    }

    else if(this.state.startYear && this.state.endYear){
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


  render= props => {
    return (
      <div>

        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form>
                <Input
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                  name="topic"
                  placeholder="Topic"
                />
                <Input
                  value={this.state.startYear}
                  onChange={this.handleInputChange}
                  name="startYear"
                  placeholder="Start Year"
                />
                <Input
                  value={this.state.endYear}
                  onChange={this.handleInputChange}
                  name="endYear"
                  placeholder="End Year"
                />
                <FormBtn
                  // disabled={!(this.state.author && this.state.title)}
                  onClick={this.searchAPI}
                >
                  Search
              </FormBtn>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {console.log(this.state.results)}
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
          </div>
          {/* <Link to={`${props.match.url}/saved`} role="button" className="btn btn-link">
            Learn More
         </Link>{" "}
          <Link to="/" role="button" className="btn btn-link">
            Learn Less
         </Link>
          <Route exact path={`${props.match.url}/saved`} component={Savedarticle} /> */}
          <SavedArticle/>
        </div>
      </div>
    );
  }
}

export default App;
