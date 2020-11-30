const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! I\'m going to develop a new social network')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})