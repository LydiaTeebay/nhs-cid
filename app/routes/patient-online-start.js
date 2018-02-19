module.exports = function (router) {
  router.get('/patient-online/patient-online-start', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName');
    var hidehead = req.param('hidehead');
    res.render('patient-online/patient-online-start', { serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })
}