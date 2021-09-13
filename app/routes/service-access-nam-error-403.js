module.exports = function (router) {

    router.get('/service-access/v24/service-access-nam-error-403', function (req, res) {
        var uplift = req.param('uplift')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        var manual = req.param('manual')
        var testing = req.param('testing')

        res.render('service-access/v24/service-access-nam-error-403', { testing: testing, manual: manual, uplift: uplift, serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v23/service-access-nam-error-403', function (req, res) {
        var uplift = req.param('uplift')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        var manual = req.param('manual')
        res.render('service-access/v23/service-access-nam-error-403', { manual: manual, uplift: uplift, serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v22/service-access-nam-error-403', function (req, res) {
        var uplift = req.param('uplift')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v22/service-access-nam-error-403', { uplift: uplift, serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v21/service-access-nam-error-403', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v21/service-access-nam-error-403', { serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v20/service-access-nam-error-403', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v20/service-access-nam-error-403', { serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v19/service-access-nam-error-403', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v19/service-access-nam-error-403', { serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v18/service-access-nam-error-403', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v18/service-access-nam-error-403', { serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v17/service-access-nam-error-403', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v17/service-access-nam-error-403', { serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v16/service-access-nam-error-403', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v16/service-access-nam-error-403', { serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v15/service-access-nam-error-403', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v15/service-access-nam-error-403', { serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v14/service-access-nam-error-403', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v14/service-access-nam-error-403', { serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/demo/service-access-nam-error-403', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/demo/service-access-nam-error-403', { serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v13/service-access-nam-error-403', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v13/service-access-nam-error-403', { serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v12/service-access-nam-error-403', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/v12/service-access-nam-error-403', { serviceName: serviceName, hidehead: hidehead, service: service, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/pb/service-access-nam-error-403', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/pb/service-access-nam-error-403', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
}