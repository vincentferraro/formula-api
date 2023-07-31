import { Router } from "express";
import { addDriver } from "./addDriver";
import { getDrivers } from "./getDrivers";
import { updateDriver } from "./updateDriver";
import { deleteDriver } from "./deleteDriver";
import { getDriverById } from "./getDriverById";
import { getDriversTeam } from "./getDriversTeam";
import { getDriverByIdTeam } from "./getDriverByIdTeam";

const router: Router = Router();

// Driver Routes

router.post("/", addDriver);
router.get("/", getDrivers);
router.get("/team", getDriversTeam);
router.get("/:id", getDriverById);
router.get("/:id/team", getDriverByIdTeam);
router.put("/:id", updateDriver);
router.delete("/:id", deleteDriver);

export default router;
