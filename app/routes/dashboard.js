module.exports = function (router) {
  router.get('/account/dashboard', function (req, res) {
    // pull in the url parameter
    var vouched = req.param('vouch')
    // re-render the page along with the parameter
    res.render('account/dashboard', {vouch: vouched}, function(err, html) {
      res.send(html)
    })
  })
}