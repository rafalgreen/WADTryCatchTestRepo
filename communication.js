var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.send('GET route on communication.')
})
router.post('/', (req, res) => {
  res.send('POST route on communication.')
})

// export this router to use in our index.js
module.exports = router
