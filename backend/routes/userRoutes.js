const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getMeUser,
} = require("../controllers/userController");
const { protected } = require("../middleware/authMW");

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/brian", protected, getMeUser);

module.exports = router;
