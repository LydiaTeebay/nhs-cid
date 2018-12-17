module.exports = function (router) {
    router.get('/service-access/v14/service-access-nam-error-404', function (req, res) {
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
        res.render('service-access/v14/service-access-nam-error-404', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/demo/service-access-nam-error-404', function (req, res) {
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
        res.render('service-access/demo/service-access-nam-error-404', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v13/service-access-nam-error-404', function (req, res) {
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
        res.render('service-access/v13/service-access-nam-error-404', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v12/service-access-nam-error-404', function (req, res) {
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
        res.render('service-access/v12/service-access-nam-error-404', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/pb/service-access-nam-error-404', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var reason = req.param('reason')
        var result = req.param('result')
        res.render('service-access/pb/service-access-nam-error-404', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, result: result, reason: reason }, function(err, html) {
            res.send(html)
        })
    })
}