var express = require('express');
var db      = require('mongoose');
var parser  = require('body-parser');
var routes  = require('./app/index');

const USEDB  = 'mongodb://127.0.0.1:27017/rbac';
const PORT   = process.env.PORT || 4500;
const HOST   = '0.0.0.0';

const app    = express();
const router = express.Router();

db.connection.openUri(USEDB);
db.connection.once('open', function() {
  console.log('MongoDB connection established');
})
  .on('error', () => {
    console.error();
  });

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.get('/', function(req, res) {
  res.send({message: 'get RBAC API Service'});
});

routes(app, router);

app.listen(PORT, () => {
  console.log(`Running on: http://${HOST}:${PORT}`);
});