var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Article.find({}).sort({date: -1})
            .then(function (dbArticles) {
                console.log(dbArticles)

                var hbsObject = {
                    articles: dbArticles
                }

                res.render("index", hbsObject);

            })
    })
};