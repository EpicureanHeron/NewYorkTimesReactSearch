import React, { Component } from "react";
import Jumbotron from "./Components/Jumbotron"
import { Input, TextArea, FormBtn } from "./Components/Form"
import Navbar from "./Components/Navbar"
import Article from "./Components/Article"
import Savedarticle from "./Components/Savedarticle"
import API from "./utils/API"

import "./App.css";

class App extends Component {
  state = {
    results:[],
    topic: "",
    startYear: "",
    endYear: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  // componentDidMount() {
  //   this.loadBooks();
  // }

  // // Loads all books  and sets them to this.state.books
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Deletes a book from the database with a given id, then reloads books from the db
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  searchAPI = event => {
    console.log('triggered')
    console.log(this.state.topic)
    event.preventDefault()
    API.searchNYT(this.state.topic)
   // .then(res => console.log(res.data.response.docs))
  
  //  .then(res => this.setState(prevState => ({
  //   results: [...prevState.results,res.data.response.docs]
  // })))
  //the below is not causing the info to reload
    .then(res => this.state.results.push(res.data.response.docs))
    .then(console.log(this.state.results ))
   
   .catch(err => console.log(err))
  
   
  }

  render() {
    return (
      <div>
        <Navbar />
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

              {this.state.results.length > 1 ?  (           
              <Article 
              articles={this.state.results}
              />)
              :
              (<div>Not loaded</div>)
              }

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
