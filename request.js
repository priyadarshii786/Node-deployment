const express = require("express");

const app = express();
const port = 5000;

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
    res.send('welcome to home page');
});
app.get('/get', (req, res) => {
    console.log("inside get request");
})