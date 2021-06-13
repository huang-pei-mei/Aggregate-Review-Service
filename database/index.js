const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aggReview');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connection Successful!");
});
let aggreviewSchema = new mongoose.Schema({
  id: { type: Number, unique: true, index: true },
  overall: {
    total: { type: Number },
    average: { type: Number },
    fiveStars: { type: Number },
    fourStars: { type: Number },
    threeStars: { type: Number },
    twoStars: { type: Number },
    oneStars: { type: Number }
  },
  performance: {
    total: { type: Number },
    average: { type: Number },
    fiveStars: { type: Number },
    fourStars: { type: Number },
    threeStars: { type: Number },
    twoStars: { type: Number },
    oneStars: { type: Number }
  },
  story: {
    total: { type: Number },
    average: { type: Number },
    fiveStars: { type: Number },
    fourStars: { type: Number },
    threeStars: { type: Number },
    twoStars: { type: Number },
    oneStars: { type: Number }
  }

});
let AggReview = mongoose.model('AggReview ', aggreviewSchema);
AggReview.createIndexes();

module.exports = { AggReview, mongoose, db };
