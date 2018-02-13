module.exports = function (router) {
  router.get('/patient-online/patient-online-gp-systems-help-pa', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('patient-online/patient-online-gp-systems-help-pa', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}