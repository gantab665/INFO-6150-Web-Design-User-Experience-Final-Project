const jwt = require('jsonwebtoken');

exports.authUser = async (req, res, next) => {
    const token = req.header('x-access-token');
    if (!token) {
        return res.status(401).json({
            error: "No token authorization denied"
        })
    }
    try {
        const decoded = await jwt.verify(token, "northeastern");
        req.user = decoded.user;
        next();

    } catch (err) {
        console.log(err)
        res.status(401).json({ msg: "Token is not valid", err });
    }
}

exports.authAdmin = async (req, res, next) => {
    const token = req.header('x-access-token');
    if (!token) {
        return res.status(401).json({
            error: "No token authorization denied"
        })
    }
    try {

        const decoded = await jwt.verify(token, "northeastern");
        if (decoded.user.role !== 'admin') {
            return res.status(401).json({
                error: "To do this operation you don't have permission"
            })
        }

        req.user = decoded.user;
        next();

    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
}