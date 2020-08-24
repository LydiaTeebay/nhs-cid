module.exports = function (router) {
  router.get('/service-access/service-access-create-account', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('service-access/service-access-create-account', { service: service, serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })



  router.get('/service-access/v22/service-access-create-account', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('service-access/v22/service-access-create-account', { service: service, serviceName: serviceName, hidehead: hidehead }, function(err, html) {
        res.send(html)
    })
})

    router.get('/service-access/v4/service-access-create-account', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        res.render('service-access/v4/service-access-create-account', { service: service, serviceName: serviceName, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

  router.get('/service-access/v3/service-access-create-account', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('service-access/v3/service-access-create-account', { service: service, serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}