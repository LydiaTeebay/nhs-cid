module.exports = function (router) {
  router.get('/patient-online/patient-online-gp-online', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('patient-online/patient-online-gp-online', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
      res.send(html)
    })
  })

    router.get('/patient-online/demo/patient-online-gp-online', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var system = req.param('system')
        var surgery = req.param('surgery')
        var practiceID = req.param('practiceID')
        res.render('patient-online/demo/patient-online-gp-online', { serviceName: serviceName, hidehead: hidehead, service: service, system: system, surgery: surgery, practiceID: practiceID }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v10/patient-online-gp-online', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var system = req.param('system')
        var surgery = req.param('surgery')
        var practiceID = req.param('practiceID')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v10/patient-online-gp-online', { serviceName: serviceName, hidehead: hidehead, service: service, system: system, surgery: surgery, practiceID: practiceID, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/pb/patient-online-gp-online', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var system = req.param('system')
        var surgery = req.param('surgery')
        var practiceID = req.param('practiceID')
        res.render('patient-online/pb/patient-online-gp-online', { serviceName: serviceName, hidehead: hidehead, service: service, system: system, surgery: surgery, practiceID: practiceID }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v9/patient-online-gp-online', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var system = req.param('system')
        var surgery = req.param('surgery')
        var practiceID = req.param('practiceID')
        res.render('patient-online/v9/patient-online-gp-online', { serviceName: serviceName, hidehead: hidehead, service: service, system: system, surgery: surgery, practiceID: practiceID }, function(err, html) {
            res.send(html)
        })
    })

  router.get('/patient-online/v8/patient-online-gp-online', function (req, res) {
      var service = req.param('service')
      var serviceName = req.param('serviceName')
      var hidehead = req.param('hidehead')
      var system = req.param('system')
      var surgery = req.param('surgery')
      res.render('patient-online/v8/patient-online-gp-online', { serviceName: serviceName, hidehead: hidehead, service: service, system: system, surgery: surgery }, function(err, html) {
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