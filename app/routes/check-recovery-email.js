require('dotenv').config()

module.exports = function (router) {
  router.get('/account-recovery/check-recovery-email', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var terms = req.param('terms')
    var resend = req.param('resend')
    var mobileNum = req.param('mobileNum')
    var emailAddress = req.param('emailAddress')
    var verified = req.param('verified')
    var recoveryEmail = req.param('recoveryEmail')
    var poluser = req.param('poluser')
    var newMobileNum = req.param('newMobileNum')
    var securityCode = req.param('securityCode')
    var devMode = req.param('devMode')

    // re-render the page along with the parameter
    res.render('account-recovery/check-recovery-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, verified: verified, poluser: poluser, recoveryEmail: recoveryEmail, newMobileNum: newMobileNum, securityCode: securityCode, devMode: devMode }, function(err, html) {
      res.send(html)
    })
  })
}