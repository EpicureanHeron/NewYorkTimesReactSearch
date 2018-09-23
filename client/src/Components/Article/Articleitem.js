import React from "react";

export const Articleitem = props => (
  <li key={props.key} className="list-group-item">
    {props.snippet}
  </li>
);
export default Articleitem;