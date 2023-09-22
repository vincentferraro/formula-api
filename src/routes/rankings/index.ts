import { Router } from "express";
import { addRanking } from "./addRanking";
import { getRankings } from "./getRankings";
import { updateRanking } from "./updateRanking";
import { deleteRanking } from "./deleteRanking";
import { getRankingByCompetitionID } from "./getRankingByCompetitionId";
const router = Router();

// Ranking Routes

router.post("/", addRanking);
router.get("/", getRankings);
router.get("/competition/:id",getRankingByCompetitionID)
router.put("/:id", updateRanking);
router.delete("/:id", deleteRanking);
export default router;
