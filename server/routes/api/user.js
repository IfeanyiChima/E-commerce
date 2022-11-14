const express = require("express");
const {getUsers, getAUser, updateUser, deleteUser, getUserOrders} = require("../../controllers/usersController")
const verifyRoles = require("../../middleware/verifyRoles")
const ROLES_LIST = require("../../config/roles_list");


router = express.Router();

router.route("/")
    .get(getUsers)

router.route("/order/:id")
    .get(getUserOrders)
    
router.route("/:id")
    .get(getAUser)
    .delete(verifyRoles(ROLES_LIST.Admin), deleteUser)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), updateUser)

module.exports = router;