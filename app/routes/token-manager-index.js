module.exports = function (router) {
  router.get('/token-manager/token-manager-index', function (req, res) {
    // pull in the url parameter
      //var vouched = req.param('vouch')
      var service = req.param('service')
      var serviceName = req.param('serviceName')
    // re-render the page along with the parameter
    res.render('token-manager/token-manager-index', { service: service, serviceName: serviceName}, function(err, html) {
      res.send(html)
    })
  })
}