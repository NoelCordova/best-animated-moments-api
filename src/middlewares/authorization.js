const authorization = (req, res, next) => {
  if (req.headers.authorization) {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (
      login
      && password
      && login === process.env.USER
      && password === process.env.PASSWORD
    ) {
      next();
    } else {
      res.status(401).json({
        error: 'No autorizado',
      });
    }
  } else {
    res.status(401).json({
      error: 'No autorizado',
    });
  }
};

module.exports = authorization;
