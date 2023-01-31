import { Router } from "express";
import checkRole from "../middlewares/checkRole.js";

const router = Router();

router.get("/", checkRole, (req, res, next) => {
    res.json([]);
});
router.post("/", checkRole, (req, res, next) => {
    res.status(201).end();
});
router.put("/:id", checkRole, (req, res, next) => {
    res.status(204).end();
});
router.delete("/:id", checkRole, (req, res, next) => {
    res.status(204).end();
});

export default router;
