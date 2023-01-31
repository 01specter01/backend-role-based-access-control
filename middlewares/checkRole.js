function checkRole(req, res, next) {
    if (req.user.role !== "Admin") {
        return req.status(403).end();
    }
    next();
}
export default checkRole;
