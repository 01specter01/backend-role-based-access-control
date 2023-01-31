import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
    res.json([]);
});
router.post("/:editors", (req, res, next) => {
    res.status(201).end();
});
router.put("/:editors", (req, res, next) => {
    res.status(204).end();
});
router.delete("/:admins", (req, res, next) => {
    res.status(204).end();
});

export default router;
