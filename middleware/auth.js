const jwt = require('jsonwebtoken');
const config = require('../config');

const name = (req, res, next) => {
    // must do one of the folllowing:
    //response to the fornt end and end early
    // or
    // call next();
    console.log("I'm a middleware");
    req.foo = "bar";
    next();
};

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'Invalid Authorization' })
    }
    try {
    const decoded = jwt.verify(token, config.secretOrKey)

    req.user = decoded;
    next();
    } catch(error) {
        console.log(error)
        return res.status(500).json(error);
    }
}

module.exports = auth;