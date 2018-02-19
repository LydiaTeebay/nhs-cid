module.exports = function (router) {
  router.get('/patient-online/patient-online-gp-results', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName');
    var hidehead = req.param('hidehead');
    res.render('patient-online/patient-online-gp-results', { serviceName: serviceName, webView: webView }, function(err, html) {
      res.send(html)
    })
  })
}