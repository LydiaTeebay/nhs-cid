module.exports = function (router) {
  router.get('/create-account/two-step-code-login', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var terms = req.param('terms')
    var mobileNum = req.param('mobileNum')
    // re-render the page along with the parameter
    res.render('create-account/two-step-code-login', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, mobileNum: mobileNum }, function(err, html) {
      res.send(html)
    })
  })
}