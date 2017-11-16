module.exports = function (router) {
  router.get('/create-account/sign-on', function (req, res) {
    // pull in the url parameters
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    // re-render the page along with the parameter
    res.render('create-account/sign-on', {vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
      res.send(html)
    })
  })
}