"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = exports.tokenArray = void 0;
exports.tokenArray = ['test-token'];
const requireAuth = (req, res, next) => {
    const authToken = req.headers['authorization'];
    if (!authToken)
        return res.status(401).json({ error: 'Unauthorized' });
    if (!exports.tokenArray.includes(authToken)) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};
exports.requireAuth = requireAuth;
