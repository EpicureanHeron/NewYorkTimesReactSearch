const db = require("../models");
const key = require("../keys.js");
const axios =  "./axios";
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
  },
  //example url https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=<APIKEY>
  nytsearch: function(req, res){
    let apiURL = `${BASEURL}q=Iran&api-key=${APIKEY}`
    res.json(apiURL)
    //axios.get(apiURL)
   //   .then(response => res.json(response))
      
  }
};
