module.exports = function (router) {
  router.get('/create-account/login-nhs-create', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('create-account/login-nhs-create', { serviceName: serviceName, service: service, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/create-account/v7/login-nhs-create', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('create-account/v7/login-nhs-create', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}