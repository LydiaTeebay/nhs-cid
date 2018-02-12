module.exports = function (router) {
  router.get('/patient-online/patient-online-start', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    // re-render the page along with the parameter
    res.render('patient-online/patient-online-start', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}