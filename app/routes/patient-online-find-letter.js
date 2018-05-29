module.exports = function (router) {
  router.get('/patient-online/patient-online-find-letter', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('patient-online/patient-online-find-letter', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
      res.send(html)
    })
  })

    router.get('/patient-online/v9/patient-online-find-letter', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        res.render('patient-online/v9/patient-online-find-letter', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/mvp/patient-online-find-letter', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        res.render('patient-online/mvp/patient-online-find-letter', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
            res.send(html)
        })
    })
}