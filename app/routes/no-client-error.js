module.exports = function (router) {
    router.get('/create-account/no-client-error', function (req, res) {
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
        var result = req.param('result')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var hideBack = req.param('hideBack')
        var clientId = req.param('clientId')
        var emailParam = req.param('emailParam')
        if (clientId === 'false') {
            var reason = 'noclientid'
        } else {
            var reason = req.param('reason')
        }

        // re-render the page along with the parameter
        res.render('create-account/no-client-error', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified, poluser: poluser, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, hideBack: hideBack, reason: reason, emailParam: emailParam }, function(err, html) {
            res.send(html)
        })
    })

}