const express = require('express');
const router = express.Router();
// const router = require("express").Router();
const auth = require("../controllers/authController");

router.get("/register", auth.register);
router.post("/register", auth.registerProcess);
router.get("/login", auth.login);
router.post("/login", auth.loginProcess);
router.get("/logout", auth.logout);

// Tambahan Authorize
// Register Page
// router.post("/api/v1/auth/register", auth.registerProcess);
// // Login Page
// router.post("/api/v1/auth/login", auth.loginProcess);
// ===================================================

module.exports = router;
