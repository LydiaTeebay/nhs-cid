module.exports = function (router) {
    router.get('/patient-online/v10/patient-online-nam-error-502', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v10/patient-online-nam-error-502', { serviceName: serviceName, hidehead: hidehead, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/patient-online/pb/patient-online-nam-error-502', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        res.render('patient-online/pb/patient-online-nam-error-502', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
            res.send(html)
        })
    })
}