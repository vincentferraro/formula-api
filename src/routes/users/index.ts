import { addUser } from "./addUser";
import { deleteUser } from "./deleteUser";
import { postSignIn } from "./postSignIn";
import { getUserById } from "./getUserById";
import { getUsers } from "./getUsers";
import { updateUser } from "./updateUser";

import { Router } from "express";
import { updatePassword } from "./updatePassword";

const router: Router = Router();
// TEAM ROUTES

router.post("/", addUser);
router.get("/:id", getUserById);
router.get("/", getUsers);
router.post("/signin", postSignIn);
router.put("/:id", updateUser);
router.post("/password", updatePassword);
router.delete("/:id", deleteUser);

export default router;
