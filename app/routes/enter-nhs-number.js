require('dotenv').config()

module.exports = function (router) {
  router.get('/account-recovery/enter-nhs-number', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var devMode = req.param('devMode')
    var serviceName = req.param('serviceName')
    var terms = req.param('terms')
    var resend = req.param('resend')
    var mobileNum = req.param('mobileNum')
    var newMobileNum = req.param('newMobileNum')
    var emailAddress = req.param('emailAddress')
    var verified = req.param('verified')
    var recoveryEmail = req.param('recoveryEmail')
    var pinCode = Math.floor(1000 + Math.random() * 9000)
    var poluser = req.param('poluser')

    // re-render the page along with the parameter
    res.render('account-recovery/enter-nhs-number', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, devMode: devMode, resend: resend, mobileNum: mobileNum, newMobileNum: newMobileNum, emailAddress: emailAddress, verified: verified, poluser: poluser, recoveryEmail: recoveryEmail }, function(err, html) {
      res.send(html)
    })
  })
}