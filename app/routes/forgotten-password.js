module.exports = function (router) {
  router.get('/create-account/forgotten-password', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var poluser = req.param('poluser')
    // re-render the page along with the parameter
    res.render('create-account/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser}, function(err, html) {
      res.send(html)
    })
  })

    router.get('/create-account/v15/forgotten-password', function (req, res) {
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
        res.render('create-account/v15/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v14/forgotten-password', function (req, res) {
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
        res.render('create-account/v14/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/demo/forgotten-password', function (req, res) {
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
        res.render('create-account/demo/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v13/forgotten-password', function (req, res) {
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
        res.render('create-account/v13/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v12/forgotten-password', function (req, res) {
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
        res.render('create-account/v12/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v11/forgotten-password', function (req, res) {
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
        res.render('create-account/v11/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v10/forgotten-password', function (req, res) {
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
        res.render('create-account/v10/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/pb/forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/pb/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v9/forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/v9/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v8/forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/v8/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/mvp/forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/mvp/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })

  router.get('/create-account/v7/forgotten-password', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    // re-render the page along with the parameter
    res.render('create-account/v7/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
      res.send(html)
    })
  })

    router.get('/create-account/v6/forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v6/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v5/forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v5/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v4/forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v4/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v3/forgotten-password', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v3/forgotten-password', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
}