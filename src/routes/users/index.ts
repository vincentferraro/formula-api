import { addUser } from "./addUser";
import { deleteUser } from "./deleteUser";
import { getUserById } from "./getUserById";
import { getUsers } from "./getUsers";
import { updateUser } from "./updateUser";

import { Router } from "express";

const router: Router = Router();
// TEAM ROUTES

router.post("/", addUser);
router.get("/:id", getUserById);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
