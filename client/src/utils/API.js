import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getarticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deletearticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  savearticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  searchNYT: function(topic, begindate, enddate){

   
    let apiURL = `${BASEURL}q=${topic}&begin_date=${begindate}&end_date=${enddate}&sort=newest&api-key=27221a6d54e94979826fb6e63cbd2df8`
    return axios.get(apiURL)
  }
};



//https://api.nytimes.com/svc/search/v2/articlesearch.json?
//q=Trump
//&begin_date=20000101
//&end_date=20160101
//&api-key=27221a6d54e94979826fb6e63cbd2df8