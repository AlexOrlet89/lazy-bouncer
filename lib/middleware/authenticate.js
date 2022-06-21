const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    // TODO: Check for the session cookie
    // console.log(req.cookies); long session string
    const cookie = req.cookies && req.cookies[process.env.COOKIE_NAME];
    if (!cookie) throw new Error('You Must Sign In To Continue');

    //verify it's contents using jsonwebtoken
    const user = jwt.verify(cookie, process.env.JWT_SECRET);
    console.log(user);
    // assign the payload to req.user
    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};
