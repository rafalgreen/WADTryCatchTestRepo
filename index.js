const express = require('express')
const app = express()
const port = 3000

// modules
const communication = require('./communication.js')
app.use('/communication', communication)

app.get('/', (req, res) => res.send('Hello Express'))

app.listen(port, () => console.log('Server is running at 3000 port!'))
