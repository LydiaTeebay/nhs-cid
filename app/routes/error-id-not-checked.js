module.exports = function (router) {
    router.get('/create-account/v11/error-id-not-checked', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var poluser = req.param('poluser')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('create-account/v11/error-id-not-checked', { serviceName: serviceName, service: service, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/pb/error-id-not-checked', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        res.render('create-account/pb/error-id-not-checked', { serviceName: serviceName, service: service, devMode: devMode, returnUrl: returnUrl, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })
}