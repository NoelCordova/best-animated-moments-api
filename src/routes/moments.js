const express = require('express');

const db = require('../mongo');
const MomentModel = require('../models/moment');

const router = express.Router();

router.get('/', (req, res) => {
  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

  if (login && password && login === process.env.USER && password === process.env.PASSWORD) {
    db
      .then(() => {
        MomentModel.find({}, (error, docs) => {
          if (error) {
            res.json({error});
          }
  
          let moments = docs;
  
          res.json({moments});
        });
      })
      .catch(error => {
        res.json({error});
      });
  } else {
    res.status(401).json({
      error: "No autorizado",
    })
  }

});

module.exports = router;
