const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res, next) => {
   res.sendFile(__dirname + "/views/index.html")
});

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + "/views/about.html")
});

app.get('/works', (req, res, next) => {
    res.sendFile(__dirname + "/views/works.html")
});

app.listen(3000, () => console.log('My first app listening on port 3000!'))