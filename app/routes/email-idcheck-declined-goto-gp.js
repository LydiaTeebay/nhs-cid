module.exports = function (router) {
    router.get('/emails/v11/email-idcheck-declined-goto-gp', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v11/email-idcheck-declined-goto-gp', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v10/email-idcheck-declined-goto-gp', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v10/email-idcheck-declined-goto-gp', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v9/email-idcheck-declined-goto-gp', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v9/email-idcheck-declined-goto-gp', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v8/email-idcheck-declined-goto-gp', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v8/email-idcheck-declined-goto-gp', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/demo/email-idcheck-declined-goto-gp', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/demo/email-idcheck-declined-goto-gp', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v7/email-idcheck-declined-goto-gp', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v7/email-idcheck-declined-goto-gp', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/pb/email-idcheck-declined-goto-gp', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/pb/email-idcheck-declined-goto-gp', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
}
