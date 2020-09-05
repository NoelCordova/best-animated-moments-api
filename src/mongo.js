const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(connection => connection)
  .catch(error => {
    console.log(error);
    process.exit();
  });

