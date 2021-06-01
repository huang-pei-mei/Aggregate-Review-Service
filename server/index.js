const express = require('express');
var compression = require('compression')
const bodyParser = require('body-parser');
const db = require('../database/index.js');

let app = express();
app.use(express.compress({
  threshold : 0
}))

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/aggReview/:bookId', (req, res, next) => {
  res.set({'Access-Control-Allow-Origin': '*'})
 db.AggReview.find({'id': req.params.bookId}).exec((err, result) =>  {
  if (err) {
    next(err);
  } else {
    res.send(result);
  }
})
});

app.get('/api/reviews/:bookIds', (req, res, next) => {
  res.set({'Access-Control-Allow-Origin': '*'})
  const ids = req.params.bookIds.split(',');
 db.AggReview.find({ 'id': { $in: ids }}).exec((err, result) =>  {
  if (err) {
    next(err);
  } else {
    res.send(result);
  }
})
});


let port = process.env.port || 2880;

if(!module.parent){
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
};

module.exports = app;