module.exports = function (router) {
  router.get('/patient-online/patient-online-start', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName');
    var hidehead = req.param('hidehead');
    res.render('patient-online/patient-online-start', { serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v7/patient-online-start', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName');
    var system = req.param('system')
    var hidehead = req.param('hidehead');
    res.render('patient-online/v7/patient-online-start', { serviceName: serviceName, service: service, system: system, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v6/patient-online-start', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName');
    var hidehead = req.param('hidehead');
    res.render('patient-online/v6/patient-online-start', { serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v5/patient-online-start', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    // re-render the page along with the parameter
    res.render('patient-online/v5/patient-online-start', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}