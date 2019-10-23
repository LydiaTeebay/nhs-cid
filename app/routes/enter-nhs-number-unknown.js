require('dotenv').config()

module.exports = function (router) {
  router.get('/account-recovery/enter-nhs-number-unknown', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var devMode = req.param('devMode')
    var terms = req.param('terms')
    var resend = req.param('resend')
    var mobileNum = req.param('mobileNum')
    var newMobileNum = req.param('newMobileNum')
    var emailAddress = req.param('emailAddress')
    var recoveryEmail = req.param('recoveryEmail')
    var poluser = req.param('poluser')
    var identityLevel9 = req.param('identityLevel9')
    var identityLevel0 = req.param('identityLevel0')

    // re-render the page along with the parameter
    res.render('account-recovery/enter-nhs-number-unknown', {reason: theReason, service: service, serviceName: serviceName, devMode: devMode, terms: terms, resend: resend, mobileNum: mobileNum, newMobileNum: newMobileNum, emailAddress: emailAddress, recoveryEmail: recoveryEmail,  poluser: poluser, identityLevel9: identityLevel9, identityLevel0: identityLevel0}, function(err, html) {
      res.send(html)
    })
  })
}