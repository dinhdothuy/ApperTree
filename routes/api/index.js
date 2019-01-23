const router = require("express").Router();
const apperRoutes = require("./appers");
const userRoutes = require("./users");

// Apper routes
router.use("/appers", apperRoutes);

// User routes
router.use("/users", userRoutes);

module.exports = router;

