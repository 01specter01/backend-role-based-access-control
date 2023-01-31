import { Router } from "express";
import checkRole from "../middlewares/checkRole.js";

const router = Router();

router.get("/", checkRole, (req, res, next) => {
    res.json([]);
});
router.post("/:editors", checkRole, (req, res, next) => {
    res.status(201).end();
});
router.put("/:editors", checkRole, (req, res, next) => {
    res.status(204).end();
});
router.delete("/:admins", checkRole, (req, res, next) => {
    res.status(204).end();
});

export default router;
