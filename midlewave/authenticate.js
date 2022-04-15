module.exports = async (req, res, next) => {
    const routePath = req.originalUrl;
    const authRouts = [];
    if (req.session.userId) {
        next();
    }
};