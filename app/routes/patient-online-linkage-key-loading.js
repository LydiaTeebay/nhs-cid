module.exports = function (router) {
    router.get('/patient-online/v8/patient-online-linkage-key-loading', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var system = req.param('system')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.render('patient-online/v8/patient-online-linkage-key-loading', { serviceName: serviceName, service: service, system: system, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/mvp/patient-online-linkage-key-loading', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var system = req.param('system')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.render('patient-online/mvp/patient-online-linkage-key-loading', { serviceName: serviceName, service: service, system: system, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v7/patient-online-linkage-key-loading', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var system = req.param('system')
        var hidehead = req.param('hidehead')
        res.render('patient-online/v7/patient-online-linkage-key-loading', { serviceName: serviceName, service: service, system: system, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })
}