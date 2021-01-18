const express = require('express');
const router = express.Router();
const db = require('../utilits/database')

router.get('/', function(req, res) {
  db.select().from('post').then(function(data){
    res.send(data);
  })
});

router.get('/:id', function(req, res) {
  res.send({message: `post ${id} page`});
});

router.post('/', function(req, res) {
    res.send('new post');
  });

router.put('/:id', function(req, res) {
    res.send(`update existing post ${id}`);
  });
router.delete('/:id', function(req, res) {
    res.send(`delete selected post ${id}`);
  });  

module.exports = router;
