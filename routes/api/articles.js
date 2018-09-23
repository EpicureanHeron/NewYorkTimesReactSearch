const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/books"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

  
router.route("/search")
.get(controller.nytsearch);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);


module.exports = router;
