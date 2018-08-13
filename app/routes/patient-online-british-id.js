module.exports = function (router) {
  router.get('/patient-online/patient-online-gp-online', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('patient-online/patient-online-gp-online', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
      res.send(html)
    })
  })

    router.get('/patient-online/v10/patient-online-british-id', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var system = req.param('system')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v10/patient-online-british-id', { serviceName: serviceName, hidehead: hidehead, service: service, system: system, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/pb/patient-online-british-id', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var system = req.param('system')
        res.render('patient-online/pb/patient-online-british-id', { serviceName: serviceName, hidehead: hidehead, service: service, system: system }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v9/patient-online-british-id', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var system = req.param('system')
        res.render('patient-online/v9/patient-online-british-id', { serviceName: serviceName, hidehead: hidehead, service: service, system: system }, function(err, html) {
            res.send(html)
        })
    })

  router.get('/patient-online/v8/patient-online-british-id', function (req, res) {
      var service = req.param('service')
      var serviceName = req.param('serviceName')
      var hidehead = req.param('hidehead')
      var system = req.param('system')
      res.render('patient-online/v8/patient-online-british-id', { serviceName: serviceName, hidehead: hidehead, service: service, system: system }, function(err, html) {
          res.send(html)
      })
  })

  router.get('/patient-online/mvp/patient-online-gp-online', function (req, res) {
      var service = req.param('service')
      var serviceName = req.param('serviceName')
      var hidehead = req.param('hidehead')
      res.render('patient-online/mvp/patient-online-gp-online', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
          res.send(html)
      })
  })

  router.get('/patient-online/v7/patient-online-gp-online', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var system = req.param('system')
    var hidehead = req.param('hidehead')
    res.render('patient-online/v7/patient-online-gp-online', { serviceName: serviceName, service: service, system: system, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v6/patient-online-gp-online', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('patient-online/v6/patient-online-gp-online', { serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v5/patient-online-gp-online', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('patient-online/v5/patient-online-gp-online', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}
