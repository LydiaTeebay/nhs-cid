require('dotenv').config()

module.exports = function (router) {
  router.get('/account-recovery/P0-new-number-OTP', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var devMode = req.param('devMode')
    var terms = req.param('terms')
    var resend = req.param('resend')
    var mobileNum = req.param('mobileNum')
    var emailAddress = req.param('emailAddress')
    var verified = req.param('verified')
    var recoveryEmail = req.param('recoveryEmail')
    var poluser = req.param('poluser')
    var newMobileNum = req.param('newMobileNum')

    // re-render the page along with the parameter
    res.render('account-recovery/P0-new-number-OTP', {reason: theReason, service: service, serviceName: serviceName, devMode: devMode, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, verified: verified, recoveryEmail: recoveryEmail, poluser: poluser, newMobileNum: newMobileNum }, function(err, html) {
      res.send(html)
    })
  })
}