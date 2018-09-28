import React from "react";

export const FormBtn = props => (
  <button {...props}  className="btn btn-success customButton">
    {props.children}
  </button>
);
