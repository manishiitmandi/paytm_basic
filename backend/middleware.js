const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {  // Added space after 'Bearer'
        return res.status(403).json({
            message: "No authorization header or invalid format"
        });
    }

    // Fix: Split by space, not empty string
    const token = authHeader.split(' ')[1];  // Changed from split('') to split(' ')

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(403).json({
            message: "Invalid or expired token"
        });
    }
};

module.exports = {
    authMiddleware
};