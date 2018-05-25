module.exports = function (router) {
  router.get('/emails/email-validate', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var passwordChange = req.param('passwordChange')
    var newUser = req.param('newUser')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var terms = req.param('terms')
    var emailAddress = req.param('emailAddress')
    var poluser = req.param('poluser')
    // re-render the page along with the parameter
    res.render('emails/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser }, function(err, html) {
      res.send(html)
    })
  })
}