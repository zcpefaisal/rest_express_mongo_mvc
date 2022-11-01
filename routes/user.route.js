const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

// api/users        : GET
// api/users/:id    : GET
// api/users/       : POST
// api/users/:id    : PATCH
// api/users/:id    : Delete

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
