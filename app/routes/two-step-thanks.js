module.exports = function (router) {
  router.get('/create-account/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v15/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/pb/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/v15/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, devMode: devMode, returnUrl: returnUrl}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v14/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/pb/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/v14/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, devMode: devMode, returnUrl: returnUrl}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/demo/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/pb/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/demo/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, devMode: devMode, returnUrl: returnUrl}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v11/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/v11/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('create-account/v11/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v10/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/v10/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('create-account/v10/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/pb/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/pb/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/pb/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser, devMode: devMode, returnUrl: returnUrl, devMode: devMode, returnUrl: returnUrl}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v9/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/v9/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/v9/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/mvp/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/mvp/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/mvp/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v7/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/v7/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v7/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v6/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/v6/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v6/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v5/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/v5/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v5/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v4/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/v4/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v4/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v3/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/v3/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v3/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v2/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/v2/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v2/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
}