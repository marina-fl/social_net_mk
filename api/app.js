require('dotenv').config();

const port = process.env.PORT;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/posts');
//const usersRoutes = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send('Hello World! It\'s a minglerK network');
});

app.use('/posts', postsRoutes);
//app.use('/users', usersRoutes);

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Server has some problems');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
