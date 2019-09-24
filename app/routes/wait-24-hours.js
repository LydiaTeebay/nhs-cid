require('dotenv').config()

module.exports = function (router) {
  router.get('/account-recovery/wait-24-hours', function (req, res) {
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
    var newMobileNum = req.param('newMobileNum')
    var pinCode = Math.floor(1000 + Math.random() * 9000)
    var poluser = req.param('poluser')

    // re-render the page along with the parameter
    res.render('account-recovery/wait-24-hours', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, verified: verified, poluser: poluser, recoveryEmail: recoveryEmail, newMobileNum: newMobileNum }, function(err, html) {
      res.send(html)
    })
  })
}