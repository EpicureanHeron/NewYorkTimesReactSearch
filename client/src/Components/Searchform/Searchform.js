import React from "react";
import "./Searchform.css";

const Searchform = props =>
  <form>
    <div className="form-group">
     
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

    </div>
    <div className="form-group">
     
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" >Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>

  ;

export default Searchform;
