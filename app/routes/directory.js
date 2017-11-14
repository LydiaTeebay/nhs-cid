module.exports = function (router) {
  const express = require('express')
  const path = require('path')
  const serveIndex = require('serve-index')
  router.get('/directory', function (req, res) {
    router.use('/directory', serveIndex(path.join(__dirname, 'public')))
    router.use('/directory', express.static(path.join(__dirname, 'public')))
  })
}