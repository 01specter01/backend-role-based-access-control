function checkRole(role) {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return req.status(403).end();
        }
        next();
    };
}
export default checkRole;
