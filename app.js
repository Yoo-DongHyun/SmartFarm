const express = require('express');

const app = express();
const userRouter = require('./userRouter');

app.use('/user', userRouter);
app.use(express.static('public'));

app.get('/index', function(req, res){
    res.send('app.js');
});

app.get('*', function(req, res){
    res.status(404).send('File not Found');
});

app.listen(3000);