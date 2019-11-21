require('dotenv').config()

module.exports = function (router) {
  router.get('/account-recovery/recovery-email-added', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var terms = req.param('terms')
    var resend = req.param('resend')
    var mobileNum = req.param('mobileNum')
    var emailAddress = req.param('emailAddress')
    var verified = req.param('verified')
    var recoveryEmail = req.param('recoveryEmail')
    var newMobileNum = req.param('newMobileNum')
    var pinCode = Math.floor(1000 + Math.random() * 9000)
    var poluser = req.param('poluser')
    var devMode = req.param('devMode')
    var identityLevel9 = req.param('identityLevel9')
    var identityLevel0 = req.param('identityLevel0')

    // re-render the page along with the parameter
    res.render('account-recovery/recovery-email-added', {reason: theReason, vouch: vouched, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, verified: verified, poluser: poluser, recoveryEmail: recoveryEmail, newMobileNum: newMobileNum, devMode: devMode, identityLevel0: identityLevel0, identityLevel9: identityLevel9 }, function(err, html) {
      res.send(html)
    })
  })
}