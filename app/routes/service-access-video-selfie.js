module.exports = function (router) {
    router.get('/service-access/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        // re-render the page along with the parameter
        res.render('service-access/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v15/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var devMode = req.param('devMode')
        var idType = req.param('idType')
        var returnUrl = req.param('returnUrl')
        var genericButton = req.param('genericButton')
        // re-render the page along with the parameter
        res.render('service-access/v15/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, idType: idType, challenge: challenge, devMode: devMode, returnUrl: returnUrl, genericButton: genericButton }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v14/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var genericButton = req.param('genericButton')
        // re-render the page along with the parameter
        res.render('service-access/v14/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge, devMode: devMode, returnUrl: returnUrl, genericButton: genericButton }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/demo/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var genericButton = req.param('genericButton')
        // re-render the page along with the parameter
        res.render('service-access/demo/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge, devMode: devMode, returnUrl: returnUrl, genericButton: genericButton }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v13/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v13/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v12/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v12/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v11/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v11/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v10/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('service-access/v10/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/pb/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var genericButton = req.param('genericButton')
        // re-render the page along with the parameter
        res.render('service-access/pb/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge, devMode: devMode, returnUrl: returnUrl, genericButton: genericButton }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v9/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        // re-render the page along with the parameter
        res.render('service-access/v9/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v8/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        // re-render the page along with the parameter
        res.render('service-access/v8/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/mvp/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        // re-render the page along with the parameter
        res.render('service-access/mvp/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v4/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        // re-render the page along with the parameter
        res.render('service-access/v4/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v3/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('service-access/service-access-video-selfie', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v2/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('service-access/v2/service-access-video-selfie', { service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v1/service-access-video-selfie', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('service-access/v1/service-access-video-selfie', { service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
}