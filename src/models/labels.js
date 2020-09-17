const mongoose = require('mongoose');

const { Schema } = mongoose;

const LabelSchema = new Schema({
  label: String,
  value: String,
});

const LabelModel = mongoose.model('Labels', LabelSchema);

module.exports = LabelModel;
