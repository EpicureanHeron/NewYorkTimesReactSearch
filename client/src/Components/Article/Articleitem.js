import React from "react";

export const Articleitem = props => (
  <li key={props.key} className="list-group-item">
    <a href={props.url}>{props.headline}</a>
    <p>{props.date}</p>
  </li>
);
export default Articleitem;