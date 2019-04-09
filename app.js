const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// mongoose.connect('mongodb://localhost/ninjago');
mongoose.connect('mongodb+srv://admin:ZT2kKMtwXngLWrHl@nacluster-vmikz.mongodb.net/test-database?retryWrites=true', {useNewUrlParser: true}, function(err){
     if(err) throw err;
     console.log("database connection established");
});

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', require('./routes/api'));
app.use(function(err, req, res, next) {
     // console.log(err);
     res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, function() {
     console.log('now listening to requests');
});
