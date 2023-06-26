import { Router } from "express";
import { addDriver } from "./addDriver";
import { getDrivers } from "./getDrivers";
import { updateDriver } from "./updateDriver";
import { deleteDriver } from "./deleteDriver";
import { getDriverById } from "./getDriverById";

const router: Router = Router();

// Circuit Routes

router.post("/", addDriver);
router.get("/", getDrivers);
router.get("/:id", getDriverById);
router.put("/:id", updateDriver);
router.delete("/:id", deleteDriver);

export default router;
