import { Router } from "express";
import { addRanking } from "./addRanking";
import { getRankings } from "./getRankings";
import { updateRanking } from "./updateRanking";
import { deleteRanking } from "./deleteRanking";
const router = Router();

// Ranking Routes

router.post("/", addRanking);
router.get("/", getRankings);
router.put("/:id", updateRanking);
router.delete("/:id", deleteRanking);
export default router;
