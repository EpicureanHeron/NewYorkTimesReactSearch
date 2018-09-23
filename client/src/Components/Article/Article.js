import React, { Component } from "react";

import "./Article.css";
import API from "../../utils/API";
import Articleitem from "./Articleitem"

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
       this.setState({ articleInfo: res.data.response.docs })
        //console.log(res.data.response.docs )
      )
      .catch(err => console.log(err));
  };

  render() {

    return (
      <div>
        <ul>
        {this.state.articleInfo.map(item => <Articleitem
          key={item.title}
          snippet={item.snippet}
        />)}
        </ul>
      </div>
    )

  }
}

export default Article;
