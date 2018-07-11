module.exports = function (router) {
    router.get('/patient-online/v10/patient-online-nam-error-400', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        res.render('patient-online/v10/patient-online-nam-error-400', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/patient-online/pb/patient-online-nam-error-400', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        res.render('patient-online/pb/patient-online-nam-error-400', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
            res.send(html)
        })
    })
}