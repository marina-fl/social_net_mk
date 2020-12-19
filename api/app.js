require('dotenv').config();
const port = process.env.PORT;
const host = process.env.HOST;

const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World! I\'m going to develop a new social network');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Server has some problems');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});