const mongoose = require('mongoose');

const { Schema } = mongoose;

const MomentSchema = new Schema({
  moment: String,
  from: String,
  when: String,
  timestamp: String,
  created: Date,
  labels: [String],
}, {
  versionKey: false,
});

const MomentModel = mongoose.model('Moments', MomentSchema);

module.exports = MomentModel;
