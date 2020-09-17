const express = require('express');

const db = require('../mongo');
const LabelModel = require('../models/labels');

const router = express.Router();

router.get('/', (req, res) => {
  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

  if (login && password && login === process.env.USER && password === process.env.PASSWORD) {
    db
      .then(() => {
        LabelModel.find({}, (error, docs) => {
          if (error) {
            res.json({ error });
          }

          const labels = docs;

          res.json({ labels });
        });
      })
      .catch((error) => {
        res.json({ error });
      });
  } else {
    res.status(401).json({
      error: 'No autorizado',
    });
  }
});

module.exports = router;
