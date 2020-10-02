const express = require('express');

const authorization = require('../middlewares/authorization');

const db = require('../mongo');
const MomentModel = require('../models/moment');

const router = express.Router();

router.get('/', authorization, (req, res) => {
  db
    .then(() => {
      MomentModel.find({}, (error, docs) => {
        if (error) {
          res.status(500).json({ error });
        }

        const moments = docs;

        res.json({ moments });
      });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.post('/', authorization, (req, res) => {
  const { body } = req;

  const moment = new MomentModel({ ...body, created: new Date() });

  moment.save((error, saved) => {
    if (error) {
      res.status(500).json({ error });
    }

    res.json({ saved });
  });
});

module.exports = router;
