const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    // TODO: Check for the session cookie
    // console.log(req.cookies); long session string
    const cookie = req.cookies && req.cookies[process.env.COOKIE_NAME];
    if (!cookie) throw new Error('You must be signed in to continue');

    //verify it's contents using jsonwebtoken
    const user = jwt.verify(cookie, process.env.JWT_SECRET);
    // assign the payload to req.user
    req.user = user;

    next();
  } catch (err) {
    err.status = 401;
    next(err);
  }
};
