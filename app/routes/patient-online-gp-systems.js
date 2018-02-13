module.exports = function (router) {
  router.get('/patient-online/patient-online-gp-systems', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('patient-online/patient-online-gp-systems', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}