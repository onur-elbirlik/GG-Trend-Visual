var express = require('express');
var app = express();
var path = require('path');

app.listen(8080, function () {
  console.log('Working...');


var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');


var MongoClient = require('mongodb').MongoClient;
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.sendfile('/index.html', {root: __dirname});
});

app.get('/word', function(req, res) {

    MongoClient.connect('mongodb://localhost:27017/chart', function(err, db) {
      if (err) {
        throw err;
      }
      db.collection('word').find({}, {word:1, _id:0}).toArray(function(err, result) {
        if (err) {
          throw err;
        }
        res.send(result);
      });
    });
});
});
