import React from "react";

export const Articleitem = props => (
  <div key={props.key} className="customList">
    <a className="linkList" target="_blank" href={props.url}><h3>{props.headline}</h3></a>
    <p>Published Date: {props.date.substring(0, 10)}</p>
    <button type="button" onClick={() => props.handleClick(props.headline, props.url, props.date)} className="btn btn-info buttonbuffer">Save</button>
  </div>
);
export default Articleitem;

