const db = require("../models");
const key = require("../keys.js");
const axios =  require("../node_modules/axios");
require("dotenv").config();
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = key.nyt.id

// Defining methods for the Article
module.exports = {
  findAll: function(req, res) {
  
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  //example url https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=<APIKEY>
  // nytsearch: function(req, res){
  //   //let apiURL = `${BASEURL}q=Iran&api-key=${APIKEY}`
  //   let apiURL = `${BASEURL}q=Iran&api-key=27221a6d54e94979826fb6e63cbd2df8`
  //   console.log(apiURL)
  //  // res.json(apiURL)
  //   axios.get(apiURL)
  //    .then(data => res(data))
  //    .catch(err => res.status(422).json(err));
    
  // }
};
