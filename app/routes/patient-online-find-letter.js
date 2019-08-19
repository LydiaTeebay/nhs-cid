module.exports = function (router) {
  router.get('/patient-online/patient-online-find-letter', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('patient-online/patient-online-find-letter', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
      res.send(html)
    })
  })

    router.get('/patient-online/demo/patient-online-find-letter', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        res.render('patient-online/demo/patient-online-find-letter', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/patient-online/v11/patient-online-find-letter', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v11/patient-online-find-letter', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v10/patient-online-find-letter', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v10/patient-online-find-letter', { serviceName: serviceName, hidehead: hidehead, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/pb/patient-online-find-letter', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        res.render('patient-online/pb/patient-online-find-letter', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v9/patient-online-find-letter', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        res.render('patient-online/v9/patient-online-find-letter', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v8/patient-online-find-letter', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        res.render('patient-online/v8/patient-online-find-letter', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/mvp/patient-online-find-letter', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        res.render('patient-online/mvp/patient-online-find-letter', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
            res.send(html)
        })
    })
}