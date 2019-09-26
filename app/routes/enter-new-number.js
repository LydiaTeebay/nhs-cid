require('dotenv').config()

module.exports = function (router) {
  router.get('/account-recovery/enter-new-number', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var devMode = req.param('devMode')
    var terms = req.param('terms')
    var resend = req.param('resend')
    var mobileNum = req.param('mobileNum')
    var emailAddress = req.param('emailAddress')
    var recoveryEmail = req.param('recoveryEmail')
    var poluser = req.param('poluser')
    var identityLevel9 = req.param('identityLevel9')
    var identityLevel0 = req.param('identityLevel0')

    // re-render the page along with the parameter
    res.render('account-recovery/enter-new-number', {reason: theReason, service: service, serviceName: serviceName, devMode: devMode, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, poluser: poluser, recoveryEmail: recoveryEmail, identityLevel0: identityLevel0, identityLevel9: identityLevel9 }, function(err, html) {
      res.send(html)
    })
  })

  router.post('/account-recovery/enter-new-number', function (req, res) {
    var theReason = req.param('reason')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var devMode = req.param('devMode')
    var terms = req.param('terms')
    var resend = req.param('resend')
    var mobileNum = req.param('mobileNum')
    var newMobileNum = req.body.newMobileNum
    var emailAddress = req.param('emailAddress')
    var recoveryEmail = req.param('recoveryEmail')
    var poluser = req.param('poluser')
    var identityLevel9 = req.param('identityLevel9')
    var identityLevel0 = req.param('identityLevel0')
    res.redirect('/account-recovery/new-number-OTP?' + '&reason=' + theReason + '&service=' + service + '&serviceName=' + serviceName + '&devMode=' + devMode + "&terms=" + terms + "&resend=" + resend + '&mobileNum=' + mobileNum + "&newMobileNum=" + newMobileNum + '&emailAddress=' + emailAddress + "&recoveryEmail=" + recoveryEmail + "&poluser=" + poluser + "&identityLevel0=" + identityLevel0 + "&identityLevel9=" + identityLevel9)
  })
}

