const router = require("express").Router();
const nytRoutes = require("./articles");

// Book routes
router.use("/articles", nytRoutes);

module.exports = router;
