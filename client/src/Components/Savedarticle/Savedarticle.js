import React from "react";
import "./Savedarticle.css";
import Saved from "../../Pages/Saved/Saved"
import { Link, Route } from "react-router-dom";

const SavedArticle = props => (
  <div>
    <Link to={`/saved`} role="button" className="btn btn-link">
      Show Saved Articles
</Link>{" "}
    <Link to="/" role="button" className="btn btn-link">
    Hide Saved Articles
</Link>
    <Route exact path={`/saved`} component={Saved} />
  </div>
)
export default SavedArticle;
