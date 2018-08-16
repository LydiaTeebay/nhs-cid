module.exports = function (router) {
    router.get('/emails/v4/email-account-created', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var passwordChange = req.param('passwordChange')
        var newUser = req.param('newUser')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v4/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/remote-testing/email-account-created', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var passwordChange = req.param('passwordChange')
        var newUser = req.param('newUser')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('remote-testing/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
}