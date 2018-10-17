module.exports = function (router) {
  router.get('/emails/email-idcheck-approved', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var result = req.param('result')
        var demographics = req.param('demographics')
        // re-render the page along with the parameter
        res.render('emails/email-idcheck-approved', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/pb/email-idcheck-approved', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/pb/email-idcheck-approved', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v6/email-idcheck-approved', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v6/email-idcheck-approved', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v5/email-idcheck-approved', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('emails/v5/email-idcheck-approved', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v4/email-idcheck-approved', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('emails/v4/email-idcheck-approved', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/pb/email-idcheck-approved', function (req, res) {
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
        res.render('emails/pb/email-idcheck-approved', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v1/email-idcheck-approved', function (req, res) {
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
        res.render('emails/v1/email-idcheck-approved', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, verified: verified, result: result, demographics: demographics }, function(err, html) {
            res.send(html)
        })
    })
}
