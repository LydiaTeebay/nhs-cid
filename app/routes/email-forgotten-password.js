module.exports = function (router) {
  router.get('/emails/email-forgotten-password', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    // re-render the page along with the parameter
    res.render('emails/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
      res.send(html)
    })
  })

    router.get('/emails/v12/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v12/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v11/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v11/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v10/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v10/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v9/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v9/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v8/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v8/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/demo/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/demo/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v7/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v7/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v6/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v6/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v5/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/v5/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v4/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('emails/v4/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/pb/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('emails/pb/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v3/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('emails/v3/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/emails/v1/email-forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('emails/v1/email-forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
}