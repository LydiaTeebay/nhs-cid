module.exports = function (router) {
  router.get('/service-access/service-access-create-account', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('service-access/service-access-create-account', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/service-access/v3/service-access-create-account', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('service-access/v3/service-access-create-account', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}