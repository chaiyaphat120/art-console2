const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

app.use(cors())
app.get('*.js', function (req, res, next) {
    next()
})
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(7832)