import React, { Component } from "react";
import "./Article.css";
import Articleitem from "./Articleitem"


const Article = props => (

  <div>
    <ul>

      {props.apiresults.map(item => <Articleitem
        key={item.title}
        headline={item.headline.main}
        url={item.web_url}
        date={item.pub_date}
        handleClick = {props.handleClick}
      />)}

    </ul>
  </div>


)


export default Article;
