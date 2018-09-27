const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/books"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

  
// router.route("/search")
// .get(controller.nytsearch);

// Matches with "/api/books/:id"
router.route("/:id")
  // .get(controller.findById)
  // .put(controller.update)
  .delete(controller.remove);

// router.route("*",  function (req, res) {


//   //might need to use the below when posted on heroku
//   //res.sendFile(path.join(__dirname + '/client/build/index.html'))

//   //this does not work either...not sure if this only works once it goes live or what. 
//   res.sendFile(path.join(__dirname + '/client/public/index.html'))
    
  
// })

     

module.exports = router;
