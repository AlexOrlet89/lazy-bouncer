const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    // TODO: Check for the session cookie
    console.log(req.cookies);
    const cookie = req.cookies && req.cookies[process.env.COOKIE_NAME];

    if (!cookie) throw new Error('You Must Sign In To Continue');

    //verify it's contents using jsonwebtoken
  } catch (error) {
    next(error);
  }

  // its contents using jsonwebtoken, then
  // assign the payload to req.user
};
