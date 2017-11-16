module.exports = function (router) {
  router.get('/prove-your-identity/pyi-uplift', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    // re-render the page along with the parameter
    res.render('prove-your-identity/pyi-uplift', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
      res.send(html)
    })
  })
}