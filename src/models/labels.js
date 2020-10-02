const mongoose = require('mongoose');

const { Schema } = mongoose;

const LabelSchema = new Schema({
  label: String,
  value: String,
}, {
  versionKey: false,
});

const LabelModel = mongoose.model('Labels', LabelSchema);

module.exports = LabelModel;
