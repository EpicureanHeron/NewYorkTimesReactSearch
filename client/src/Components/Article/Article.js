import React, { Component } from "react";

import "./Article.css";
import API from "../../utils/API";
import Articleitem from "./Articleitem"

class Article extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    articleInfo: []
  };

  componentDidMount() {
   
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
          headline={item.headline.main}
          url={item.web_url}
          date={item.pub_date}
        />)}
        </ul>
      </div>
    )

  }
}

export default Article;
