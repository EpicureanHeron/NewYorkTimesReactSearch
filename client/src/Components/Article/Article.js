import React, { Component } from "react";

import "./Article.css";
import API from "../../utils/API";

class Article extends Component {
  state = {
    articleInfo: []
  };

  componentDidMount() {
    console.log("this triggered")
    this.getArticles();
  }

  getArticles = () => {
    API.searchNYT()
      .then(res =>
        this.setState({ article: res.docs })
      )
      .catch(err => console.log(err));
  };

  render() {
    return(<p>{this.state.articleInfo}</p>)
    
  }

}

export default Article;
