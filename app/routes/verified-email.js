module.exports = function (router) {
  router.get('/create-account/verified-email', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/verified-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v11/verified-email', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('create-account/v11/verified-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v10/verified-email', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('create-account/v10/verified-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/pb/verified-email', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/pb/verified-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v9/verified-email', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/v9/verified-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/mvp/verified-email', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/mvp/verified-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v7/verified-email', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v7/verified-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v6/verified-email', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v6/verified-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v5/verified-email', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v5/verified-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v4/verified-email', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v4/verified-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v3/verified-email', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v3/verified-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
}