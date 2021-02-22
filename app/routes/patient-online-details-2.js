module.exports = function (router) {
  router.get('/patient-online/patient-online-details-2', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('patient-online/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, service: service }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v23/patient-online-details-2', function (req, res) {
    var uplift = req.param('uplift')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    var devMode = req.param('devMode')
    var returnUrl = req.param('returnUrl')
    var lsId = req.param('lsId')
    var lsAccess = req.param('lsAccess')
    var lsStudy = req.param('lsStudy')
    var hideBack = req.param('hideBack')
    var drop = req.param('drop')
    var manual = req.param('manual')
    res.render('patient-online/v23/patient-online-details-2', { uplift: uplift, serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, hideBack: hideBack, drop: drop, manual: manual }, function(err, html) {
        res.send(html)
    })
})

  router.get('/patient-online/v22/patient-online-details-2', function (req, res) {
    var uplift = req.param('uplift')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    var devMode = req.param('devMode')
    var returnUrl = req.param('returnUrl')
    var lsId = req.param('lsId')
    var lsAccess = req.param('lsAccess')
    var lsStudy = req.param('lsStudy')
    var hideBack = req.param('hideBack')
    var drop = req.param('drop')
    var manual = req.param('manual')
    res.render('patient-online/v22/patient-online-details-2', { uplift: uplift, serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, hideBack: hideBack, drop: drop, manual: manual }, function(err, html) {
        res.send(html)
    })
})

    router.get('/patient-online/v21/patient-online-details-2', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var hideBack = req.param('hideBack')
        var drop = req.param('drop')
        var manual = req.param('manual')
        res.render('patient-online/v21/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, hideBack: hideBack, drop: drop, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v20/patient-online-details-2', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var hideBack = req.param('hideBack')
        var drop = req.param('drop')
        var manual = req.param('manual')
        res.render('patient-online/v20/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, hideBack: hideBack, drop: drop, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v19/patient-online-details-2', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var hideBack = req.param('hideBack')
        var drop = req.param('drop')
        var manual = req.param('manual')
        res.render('patient-online/v19/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, hideBack: hideBack, drop: drop, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/demo/patient-online-details-2', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var poluser = req.param('poluser')
        res.render('patient-online/demo/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v12/patient-online-details-2', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v12/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v11/patient-online-details-2', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v11/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v10/patient-online-details-2', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v10/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, service: service, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/pb/patient-online-details-2', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var poluser = req.param('poluser')
        res.render('patient-online/pb/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, service: service, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v9/patient-online-details-2', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.render('patient-online/v9/patient-online-details-2', { serviceName: serviceName, hidehead: hidehead, service: service, poluser: poluser}, function(err, html) {
            res.send(html)
        })
    })
}