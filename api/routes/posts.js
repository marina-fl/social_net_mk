const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! I\'m going to develop a new social network');
  });
  
router.get('/posts', function(req, res) {
  res.send('posts list');
});

router.get('/posts/:id', function(req, res) {
  res.send('post page');
});

router.post('/posts', function(req, res) {
    res.send('new post');
  });

router.put('/posts/:id', function(req, res) {
    res.send('update existing post');
  });
router.delete('/posts/:id', function(req, res) {
    res.send('delete selected post');
  });  

module.exports = router;