module.exports = function (router) {
  router.get('/prove-your-identity/pyi-uplift-2', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var verify = req.param('verify')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    // re-render the page along with the parameter
    res.render('prove-your-identity/pyi-uplift-2', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, verify: verify}, function(err, html) {
      res.send(html)
    })
  })
    router.get('/prove-your-identity/v4/pyi-uplift-2', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var verify = req.param('verify')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('prove-your-identity/v4/pyi-uplift-2', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, verify: verify}, function(err, html) {
            res.send(html)
        })
    })
}