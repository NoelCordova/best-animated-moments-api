const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MomentSchema = new Schema({
  name: String,
});

const MomentModel = mongoose.model('Moments', MomentSchema);

module.exports = MomentModel;
