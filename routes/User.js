const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");

const isAuth = require("../middleware/passport");



//@method POST
//@desc POST A USER
// @PATH  http://localhost:8999/register
// @Params  Body
// register
router.post("/register", registerRules(), validation, controllers.register);

//@method POST
//@desc POST A USER
// @PATH  http://localhost:8999/login
// @Params  Body
// register
// login
router.post("/login", loginRules(), validation, controllers.login);

//@method GET
//@desc GET A USER
// @PATH  http://localhost:8999/user/current
// @Params  Body
// get current user
router.get("/current", isAuth(), controllers.current);





//@method DELETE
//@desc delete one user by id
//@path : http://localhost:8999/user/admin
//@Params id
router.delete("/admin-sup/:id", controllers.DeleteOneUser);






module.exports = router;
