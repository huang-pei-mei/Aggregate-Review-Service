const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');

let app = express();
app.use(cors());


app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/aggReview/:bookId', (req, res, next) => {
 db.AggReview.find({'id': req.params.bookId}).exec((err, result) =>  {
  console.log(result)
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