import { Router } from "express";
import { addDriversRaces } from "./addDriversRaces";
import { getDriversRaces } from "./getDriversRaces";
import { updateDriversRaces } from "./updateDriversRaces";
import { deleteDriversRaces } from "./deleteDriversRaces";
import { getDriversRacesByDriverId } from "./getRacesByDriverId";
const router: Router = Router();

// DriverRaces routes

router.post("/", addDriversRaces);
router.get("/", getDriversRaces);
router.get("/driver_id/:id", getDriversRacesByDriverId);
router.put("/:id", updateDriversRaces);
router.delete("/:id", deleteDriversRaces);

export default router;
