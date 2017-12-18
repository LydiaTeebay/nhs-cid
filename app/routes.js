/** * This file defines all routes used in this application. Any logic that is
 * applicable to all routes can be added here.
 */

const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express.Router()
const files = fs.readdirSync(path.resolve(__dirname, 'routes'))

const routes = files.map((file) => {
  return require(path.resolve(__dirname, 'routes', file.replace('.js', '')))
})

module.exports = function (router, njk) {
  routes.forEach(function (route) {
    // route(router, njk)
  })
}

app.all('/', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})