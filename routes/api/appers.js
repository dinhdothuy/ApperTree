const router = require("express").Router();
const appersController = require("../../controllers/appersController");

// Matches with "/api/appers"
router.route("/")
  .get(appersController.findAll)
  .post(appersController.create);

// Matches with "/api/appers/:id"
router
  .route("/:id")
  .get(appersController.findById)
  .put(appersController.update)
  .delete(appersController.remove);

module.exports = router;
