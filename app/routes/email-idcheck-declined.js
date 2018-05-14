module.exports = function (router) {
  router.get('/emails/email-idcheck-declined', function (req, res) {
    // pull in the url parameters
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var emailAddress = req.param('emailAddress')
    var mobileNum = req.param('mobileNum')
    var verified = req.param('verified')
    var result = req.param('result')
    var demographics = req.param('demographics')
    // re-render the page along with the parameter
    res.render('emails/email-idcheck-declined', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics }, function(err, html) {
      res.send(html)
    })
  })
}
