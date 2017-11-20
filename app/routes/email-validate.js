module.exports = function (router) {
  router.get('/emails/email-validate', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var passwordChange = req.param('passwordChange')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    // re-render the page along with the parameter
    res.render('emails/email-validate', {reason: theReason, passwordChange: passwordChange, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
      res.send(html)
    })
  })
}