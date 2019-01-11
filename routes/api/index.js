const router = require("express").Router();
const apperRoutes = require("./appers");

// Book routes
router.use("/appers", apperRoutes);

module.exports = router;
