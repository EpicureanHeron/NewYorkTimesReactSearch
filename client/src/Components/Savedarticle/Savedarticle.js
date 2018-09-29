import React from "react";
import "./Savedarticle.css";
import Saved from "../../Pages/Saved/Saved"
import { Link, Route } from "react-router-dom";

const SavedArticle = props => (
  
  <div className="linkDiv">
    <Link to={`/saved`} role="button" className="btn btn-link linkList">
      Show Saved Articles
</Link>{" "}
    <Link to="/" role="button" className="btn btn-link linkList ">
    Hide Saved Articles
</Link>
    <Route  exact path={`/saved`} component={() => <Saved savedArticles={props.savedArticles} delete={props.delete} loadArticles={props.loadArticles}/>} />
  </div>
)
export default SavedArticle;


