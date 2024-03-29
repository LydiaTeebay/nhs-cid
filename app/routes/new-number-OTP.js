require('dotenv').config()

module.exports = function (router) {
  router.get('/account-recovery/new-number-OTP', function (req, res) {
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
    var identityLevel9 = req.param('identityLevel9')
    var identityLevel0 = req.param('identityLevel0')

    // re-render the page along with the parameter
    res.render('account-recovery/new-number-OTP', {reason: theReason, service: service, serviceName: serviceName, devMode: devMode, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, verified: verified, recoveryEmail: recoveryEmail, poluser: poluser, newMobileNum: newMobileNum, identityLevel0: identityLevel0, identityLevel9: identityLevel9 }, function(err, html) {
      res.send(html)
    })
  })
}