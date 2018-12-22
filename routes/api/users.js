const router = require("express").Router();
// const { check, validationResult } = require('express-validator');
const userController = require("../../controllers/userController");

// Matches with "/api/chef"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
module.exports = router;
