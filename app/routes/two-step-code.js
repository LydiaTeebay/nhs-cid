module.exports = function (router) {
  router.get('/create-account/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('create-account/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, emailAddress: emailAddress}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v13/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var emailAddress = req.param('emailAddress')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('create-account/v13/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, poluser: poluser, emailAddress: emailAddress, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v12/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var emailAddress = req.param('emailAddress')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('create-account/v12/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, poluser: poluser, emailAddress: emailAddress, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v11/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var emailAddress = req.param('emailAddress')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('create-account/v11/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, poluser: poluser, emailAddress: emailAddress, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v10/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var emailAddress = req.param('emailAddress')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('create-account/v10/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, emailAddress: emailAddress, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/pb/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('create-account/pb/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl, poluser: poluser, emailAddress: emailAddress }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v9/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('create-account/v9/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, emailAddress: emailAddress }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/mvp/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('create-account/mvp/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, emailAddress: emailAddress }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v7/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v7/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v6/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v6/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v5/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v5/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v4/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v4/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v3/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v3/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v2/two-step-code', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v2/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
  router.get('/patient-online/two-step-code', function (req, res) {
      // pull in the url parameters
      var theReason = req.param('reason')
      var vouched = req.param('vouch')
      var service = req.param('service')
      var serviceName = req.param('serviceName')
      // re-render the page along with the parameter
      res.render('patient-online/two-step-code', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
          res.send(html)
      })
  })
}