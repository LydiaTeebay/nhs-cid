module.exports = function (router) {
  router.get('/create-account/terms', function (req, res) {
    // pull in the url parameters
    var vouched = req.param('vouch')
    var service = req.param('service')
    var newUser = req.param('newUser')
    var serviceName = req.param('serviceName')
    var passwordChange = req.param('passwordChange')
    var terms = req.param('terms')
    var emailAddress = req.param('emailAddress')
    var mobileNum = req.param('mobileNum')
    var verified = req.param('verified')
    var poluser = req.param('poluser')
    // re-render the page along with the parameter
    res.render('create-account/terms', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified, poluser: poluser }, function(err, html) {
        res.send(html)
    })
  })

    router.get('/create-account/mvp/terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/mvp/terms', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
}