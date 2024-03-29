module.exports = function (router) {
  router.get('/service-access/service-access-create-account', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('service-access/service-access-create-account', { service: service, serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })


  router.get('/service-access/v24/service-access-create-account', function (req, res) {
    var uplift = req.param('uplift')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    var manual = req.param('manual')
    var testing = req.param('testing')
    var lsId = req.param('lsId')
    var lsStudy = req.param('lsStudy')

    res.render('service-access/v24/service-access-create-account', { lsId: lsId, lsStudy: lsStudy, testing: testing, manual: manual, uplift: uplift, service: service, serviceName: serviceName, hidehead: hidehead }, function(err, html) {
        res.send(html)
    })
})

  router.get('/service-access/v23/service-access-create-account', function (req, res) {
    var uplift = req.param('uplift')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    var manual = req.param('manual')
    res.render('service-access/v23/service-access-create-account', { manual: manual, uplift: uplift, service: service, serviceName: serviceName, hidehead: hidehead }, function(err, html) {
        res.send(html)
    })
})


  router.get('/service-access/v22/service-access-create-account', function (req, res) {
    var uplift = req.param('uplift')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('service-access/v22/service-access-create-account', { uplift: uplift, service: service, serviceName: serviceName, hidehead: hidehead }, function(err, html) {
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