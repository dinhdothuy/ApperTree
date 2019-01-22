const router = require("express").Router();
const apperRoutes = require("./appers");

// Apper routes
router.use("/appers", apperRoutes);

module.exports = router;

