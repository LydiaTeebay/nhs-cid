module.exports = function (router) {
    router.get('/create-account/v17/consent-declined', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var resend = req.param('resend')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/v17/consent-declined', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v16/consent-declined', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var resend = req.param('resend')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/v16/consent-declined', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/pb/consent-declined', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var resend = req.param('resend')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/pb/consent-declined', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/demo/consent-declined', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var resend = req.param('resend')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/demo/consent-declined', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, resend: resend, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
}