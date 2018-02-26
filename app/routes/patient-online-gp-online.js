module.exports = function (router) {
  router.get('/patient-online/patient-online-gp-online', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('patient-online/patient-online-gp-online', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v5/patient-online-gp-online', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('patient-online/v5/patient-online-gp-online', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}