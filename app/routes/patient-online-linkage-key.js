module.exports = function (router) {
  router.get('/patient-online/patient-online-linkage-key', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName');
    var hidehead = req.param('hidehead');
    res.render('patient-online/patient-online-linkage-key', { serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })
}