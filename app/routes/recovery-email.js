require('dotenv').config()

module.exports = function (router) {
    router.get('/create-account/v19/recovery-email', function (req, res) {
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
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var formerror = req.param('formerror')
        var pinCode = Math.floor(100000 + Math.random() * 900000)

        // var reason = req.param('reason')
        var result = req.param('result')
        
        // re-render the page along with the parameter
        res.render('create-account/v19/recovery-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, verified: verified, poluser: poluser, result: result, formerror: formerror }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v18/recovery-email', function (req, res) {
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
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var formerror = req.param('formerror')
        var pinCode = Math.floor(100000 + Math.random() * 900000)

        var personalisation = {
            'pincode': pinCode
        }
        // var reason = req.param('reason')
        var result = req.param('result')
        
        // re-render the page along with the parameter
        res.render('create-account/v18/recovery-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, verified: verified, poluser: poluser, result: result, formerror: formerror }, function(err, html) {
            res.send(html)
        })
    })

}