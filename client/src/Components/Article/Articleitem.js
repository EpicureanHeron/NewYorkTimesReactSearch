import React from "react";

export const Articleitem = props => (
  <li key={props.key} className="list-group-item customList">
    <a className="linkList" target="_blank" href={props.url}>{props.headline}</a>
    <p>{props.date}</p>
    <button type="button" onClick={() => props.handleClick(props.headline, props.url, props.date)} className="btn btn-info">Save</button>
  </li>
);
export default Articleitem;

