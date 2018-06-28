module.exports = function (router) {
  router.get('/patient-online/patient-online-details', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('patient-online/patient-online-details', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
      res.send(html)
    })
  })

    router.get('/patient-online/v9/patient-online-details', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        res.render('patient-online/v9/patient-online-details', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v8/patient-online-details', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var system = req.param('system')
        var surgery = req.param('surgery')
        res.render('patient-online/v8/patient-online-details', { serviceName: serviceName, hidehead: hidehead, service: service, system: system, surgery: surgery }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/mvp/patient-online-details', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        res.render('patient-online/mvp/patient-online-details', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
            res.send(html)
        })
    })
}