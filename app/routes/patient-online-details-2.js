module.exports = function (router) {
  router.get('/patient-online/patient-online-details-2', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('patient-online/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
      res.send(html)
    })
  })

    router.get('/patient-online/pb/patient-online-details-2', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.render('patient-online/pb/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, service: service, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v9/patient-online-details-2', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.render('patient-online/v9/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, service: service, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })
}