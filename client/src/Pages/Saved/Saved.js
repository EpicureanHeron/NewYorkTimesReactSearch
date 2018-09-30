import React, { Component } from "react";




//import "./App.css";


export const Saved = props => (

      <div>
        <div className="row">
          <div className="col-md-12">
         
            {props.savedArticles.length > 0 ? (
              props.savedArticles.map(item =>
                <div key={item.title} className="list-group-item customList">
                  <a  className="linkList" target="_blank" href={item.link}><h3>{item.title}</h3></a>
                 <p>Published Date: {item.date.substring(0, 10)}</p>
                  <button type="button" onClick={() => props.delete(item._id, props.loadArticles)} className="btn btn-danger">Delete</button>
                </div>)
            ) :
              (<div>No Articles Available</div>)
            }
           
          </div>
        </div>

      </div>
    );
  


export default Saved;
