const express = require("express");
const router = express.Router();

const {
  signUpGetMethod,
  signUpPostMethod,
  loginGetMethod,
  loginPostMethod,
} = require("../controller/auth-controller");

//http://127.0.0.1:8000/auth/signup
router.get("/signup", signUpGetMethod);
router.post("/signup", signUpPostMethod);

router.get("/login", loginGetMethod);
router.post("/login", loginPostMethod);

module.exports = router;
