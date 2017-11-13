module.exports = function (router) {
  router.get('/create-account/create-2', function (req, res) {
    // pull in the url parameter
    var vouched = req.param('vouch')
    // re-render the page along with the parameter
    res.render('create-account/create-2', {vouch: vouched}, function(err, html) {
      res.send(html)
    })
  })
}