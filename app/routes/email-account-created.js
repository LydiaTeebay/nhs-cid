module.exports = function (router) {
    router.get('/emails/demo/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v7/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, devMode: devMode, returnUrl: returnUrl, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v15/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v15/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, devMode: devMode, returnUrl: returnUrl, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v14/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v14/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, devMode: devMode, returnUrl: returnUrl, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v13/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v13/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, devMode: devMode, returnUrl: returnUrl, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v12/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v12/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, devMode: devMode, returnUrl: returnUrl, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v11/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v11/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, devMode: devMode, returnUrl: returnUrl, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v10/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v10/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, devMode: devMode, returnUrl: returnUrl, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v9/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v9/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, devMode: devMode, returnUrl: returnUrl, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v8/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v8/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, devMode: devMode, returnUrl: returnUrl, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v7/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v7/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, devMode: devMode, returnUrl: returnUrl, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v6/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v6/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, devMode: devMode, returnUrl: returnUrl, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v5/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v5/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, devMode: devMode, returnUrl: returnUrl, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

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
    router.get('/emails/pb/email-account-created', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/pb/email-account-created', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
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