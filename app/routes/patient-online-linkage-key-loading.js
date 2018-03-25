module.exports = function (router) {
  router.get('/patient-online/v7/patient-online-linkage-key-loading', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName');
    var system = req.param('system');
    var hidehead = req.param('hidehead');
    res.render('patient-online/v7/patient-online-linkage-key-loading', { serviceName: serviceName, service: service, system: system, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })
}