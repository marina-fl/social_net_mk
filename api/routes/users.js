// const express = require('express');
// const {v4} = require('uuid')
// const router = express.Router();
// const db = require('../utilits/database')

// router.get('/users/:id', (req, res) => {
// res.send({message: `user ${id} selected`})
// });
        
// router.post('/users', async (req, res) => {  
// const {lname, fname, login, passw} = req.body
// await db('user').insert(v4(), lname, fname, login, passw)
// res.json({message: "create new user - done!"})
// });

// router.delete('/profile/:id', (req, res) => {
// res.send({message: `user ${id} was deleted`});
//   }); 

//   module.exports = router;  