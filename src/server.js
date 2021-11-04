'use strict'

const express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
const config = require('config')

// error handler
app.use(require('./middlewares/error'))
// apis
app.use(require('./apis'))

var server = app.listen(config.get('server.port'), config.get('server.host'), function () {
  console.log('TomoScan api listening at %s:port %s', config.get('server.port'), config.get('server.host'))
})
