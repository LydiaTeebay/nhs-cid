const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (router) {
  router.get('/create-account/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/v19/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')

        if (vouched === 'yes') {
            res.redirect('/create-account/v19/create-password?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v19/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, manual: manual }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v19/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')

        if (vouched === 'yes') {
            res.redirect('/create-account/v19/create-password?vouch=yes')
            return
        }
        res.redirect('/create-account/v19/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + lsAccess + '&manual=' + manual )
    })

    router.get('/create-account/v18/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v18/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v18/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v18/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v18/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v18/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy)
    })

    router.get('/create-account/v17/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v17/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v17/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v17/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v17/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v17/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy)
    })

    router.get('/create-account/v16/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v16/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v16/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v16/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v16/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v16/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy)
    })

    router.get('/create-account/v15/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v15/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v15/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v15/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v15/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v15/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy)
    })

    router.get('/create-account/v14/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v13/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v14/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v14/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v14/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v14/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy)
    })

    router.get('/create-account/demo/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/demo/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/demo/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/demo/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/demo/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/demo/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy)
    })

    router.get('/create-account/v13/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v13/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v13/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v13/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v13/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v13/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy)
    })

    router.get('/create-account/v12/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v12/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v12/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v12/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v12/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v12/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy)
    })

    router.get('/create-account/v11/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v11/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v11/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v11/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/v11/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v11/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy)
    })

    router.get('/create-account/v10/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')

        if (vouched === 'yes') {
            res.redirect('/create-account/v10/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v10/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v10/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')

        if (vouched === 'yes') {
            res.redirect('/create-account/v10/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v10/check-email?terms=yes&emailAddress=undefined&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy)
    })

    router.get('/create-account/pb/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/pb/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/pb/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/pb/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (vouched === 'yes') {
            res.redirect('/create-account/pb/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/pb/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&devMode=' + devMode + '&returnUrl=' + returnUrl + "&poluser=" + poluser)
    })

    router.get('/create-account/v9/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/v9/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v9/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v9/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/v9/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v9/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/v8/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/v8/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v8/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v8/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/v8/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v8/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/mvp/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/mvp/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/mvp/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/mvp/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')

        if (vouched === 'yes') {
            res.redirect('/create-account/mvp/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/mvp/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/v7/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')

        if (vouched === 'yes') {
            res.redirect('/create-account/v7/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v7/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/create-account/v7/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        if (vouched === 'yes') {
            res.redirect('/create-account/v7/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v7/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })

    router.get('/create-account/v6/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')

        if (vouched === 'yes') {
            res.redirect('/create-account/v6/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v6/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v6/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        if (vouched === 'yes') {
            res.redirect('/create-account/v6/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v6/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })

    router.get('/create-account/v5/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')

        if (vouched === 'yes') {
            res.redirect('/create-account/v5/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v5/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v5/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        if (vouched === 'yes') {
            res.redirect('/create-account/v5/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v5/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })

    router.get('/create-account/v4/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')

        if (vouched === 'yes') {
            res.redirect('/create-account/v4/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v4/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v4/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        if (vouched === 'yes') {
            res.redirect('/create-account/v4/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v4/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })

    router.get('/create-account/v3/create-acc-terms', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')

        if (vouched === 'yes') {
            res.redirect('/create-account/v3/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v3/create-acc-terms', { vouch: vouched, service: service, serviceName: serviceName }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v3/create-acc-terms', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        if (vouched === 'yes') {
            res.redirect('/create-account/v3/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v3/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })
}