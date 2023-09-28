"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addUser_1 = require("./addUser");
const deleteUser_1 = require("./deleteUser");
const postSignIn_1 = require("./postSignIn");
const getUserById_1 = require("./getUserById");
const getUsers_1 = require("./getUsers");
const express_1 = require("express");
const updatePassword_1 = require("./updatePassword");
const router = (0, express_1.Router)();
// TEAM ROUTES
router.post("/", addUser_1.addUser);
router.get("/", getUsers_1.getUsers);
router.post("/signin", postSignIn_1.postSignIn);
router.put("/password", updatePassword_1.updatePassword);
router.get("/:id", getUserById_1.getUserById);
router.delete("/:id", deleteUser_1.deleteUser);
exports.default = router;
