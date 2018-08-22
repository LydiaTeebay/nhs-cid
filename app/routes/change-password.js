module.exports = function (router) {
  router.get('/create-account/change-password', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var poluser = req.param('poluser')
    // re-render the page along with the parameter
    res.render('create-account/change-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser}, function(err, html) {
      res.send(html)
    })
  })

    router.get('/create-account/v11/change-password', function (req, res) {
        // pull in the url parameters
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
        res.render('create-account/v11/change-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v10/change-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('create-account/v10/change-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/pb/change-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/pb/change-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v9/change-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/v9/change-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v8/change-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/v8/change-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/mvp/change-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/mvp/change-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })

  router.get('/create-account/v7/change-password', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    // re-render the page along with the parameter
    res.render('create-account/v7/change-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
      res.send(html)
    })
  })

    router.get('/create-account/v6/change-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v6/change-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v5/change-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v5/change-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v4/change-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v4/change-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v3/change-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v3/change-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
}