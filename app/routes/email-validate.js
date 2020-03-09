module.exports = function (router) {
  router.get('/emails/email-validate', function (req, res) {
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
    // re-render the page along with the parameter
    res.render('emails/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser }, function(err, html) {
      res.send(html)
    })
  })

    router.get('/remote-testing/email-validate', function (req, res) {
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
        res.render('remote-testing/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v14/email-validate', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v14/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, devMode: devMode, returnUrl: returnUrl, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v13/email-validate', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v13/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, devMode: devMode, returnUrl: returnUrl, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v12/email-validate', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v12/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, devMode: devMode, returnUrl: returnUrl, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v11/email-validate', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v11/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, devMode: devMode, returnUrl: returnUrl, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v10/email-validate', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v10/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, devMode: devMode, returnUrl: returnUrl, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v9/email-validate', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v9/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, devMode: devMode, returnUrl: returnUrl, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v8/email-validate', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v8/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, devMode: devMode, returnUrl: returnUrl, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/demo/email-validate', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/demo/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, devMode: devMode, returnUrl: returnUrl, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v7/email-validate', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v7/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, devMode: devMode, returnUrl: returnUrl, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v6/email-validate', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v6/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, devMode: devMode, returnUrl: returnUrl, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v5/email-validate', function (req, res) {
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
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v5/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, devMode: devMode, returnUrl: returnUrl, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v4/email-validate', function (req, res) {
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
        res.render('emails/v4/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/pb/email-validate', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('emails/pb/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v3/email-validate', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('emails/v3/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v2/email-validate', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('emails/v2/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/mvp/email-validate', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('emails/mvp/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v1/email-validate', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('emails/v1/email-validate', { reason: theReason, passwordChange: passwordChange, newUser: newUser, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
}