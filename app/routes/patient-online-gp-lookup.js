module.exports = function (router) {
  router.get('/patient-online/patient-online-gp-lookup', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('patient-online/patient-online-gp-lookup', { serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })


    router.get('/patient-online/demo/patient-online-gp-lookup', function (req, res) {
        var serviceName = req.param('serviceName')
        var service = req.param('service')
        var hidehead = req.param('hidehead')
        var emptysearch = req.param('emptysearch')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        res.render('patient-online/demo/patient-online-gp-lookup', { serviceName: serviceName, service: service, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, emptysearch: emptysearch }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/patient-online/demo/patient-online-gp-lookup', function (req, res) {
        var postcode = req.body.gpPostcode
        var search = req.body.gpName
        var serviceName = req.param('serviceName')
        var service = req.param('service')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (postcode === '' && search === '') {
            res.redirect('/patient-online/demo/patient-online-gp-lookup?serviceName=' + serviceName + '&service=' + service + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&postcode=' + postcode + '&search=' + search + '&emptysearch=true')
        } else {
            res.redirect('/patient-online/demo/patient-online-gp-results?serviceName=' + serviceName + '&service=' + service + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&postcode=' + postcode + '&search=' + search)
        }
    })

    router.get('/patient-online/v10/patient-online-gp-lookup', function (req, res) {
        var serviceName = req.param('serviceName')
        var service = req.param('service')
        var hidehead = req.param('hidehead')
        var emptysearch = req.param('emptysearch')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v10/patient-online-gp-lookup', { serviceName: serviceName, service: service, hidehead: hidehead, emptysearch: emptysearch, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/patient-online/v10/patient-online-gp-lookup', function (req, res) {
        var postcode = req.body.gpPostcode
        var search = req.body.gpName
        var serviceName = req.param('serviceName')
        var service = req.param('service')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')

        if (postcode === '' && search === '') {
            res.redirect('/patient-online/v10/patient-online-gp-lookup?serviceName=' + serviceName + '&service=' + service + '&hidehead=' + hidehead + '&postcode=' + postcode + '&search=' + search + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&emptysearch=true')
        } else {
            res.redirect('/patient-online/v10/patient-online-gp-results?serviceName=' + serviceName + '&service=' + service + '&hidehead=' + hidehead + '&postcode=' + postcode + '&search=' + search + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy)
        }
    })

    router.get('/patient-online/pb/patient-online-gp-lookup', function (req, res) {
        var serviceName = req.param('serviceName')
        var service = req.param('service')
        var hidehead = req.param('hidehead')
        var emptysearch = req.param('emptysearch')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        res.render('patient-online/pb/patient-online-gp-lookup', { serviceName: serviceName, service: service, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, emptysearch: emptysearch }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/patient-online/pb/patient-online-gp-lookup', function (req, res) {
        var postcode = req.body.gpPostcode
        var search = req.body.gpName
        var serviceName = req.param('serviceName')
        var service = req.param('service')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')

        if (postcode === '' && search === '') {
            res.redirect('/patient-online/pb/patient-online-gp-lookup?serviceName=' + serviceName + '&service=' + service + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&postcode=' + postcode + '&search=' + search + '&emptysearch=true')
        } else {
            res.redirect('/patient-online/pb/patient-online-gp-results?serviceName=' + serviceName + '&service=' + service + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&postcode=' + postcode + '&search=' + search)
        }
    })

    router.post('/patient-online/v9/patient-online-gp-lookup', function (req, res) {
        var postcode = req.body.gpPostcode
        var search = req.body.gpName
        var serviceName = req.param('serviceName')
        var service = req.param('service')
        var hidehead = req.param('hidehead')

        if (postcode === '' && search === '') {
            res.redirect('/patient-online/v9/patient-online-gp-lookup?serviceName=' + serviceName + '&service=' + service + '&hidehead=' + hidehead + '&postcode=' + postcode + '&search=' + search + '&emptysearch=true')
        } else {
            res.redirect('/patient-online/v9/patient-online-gp-results?serviceName=' + serviceName + '&service=' + service + '&hidehead=' + hidehead + '&postcode=' + postcode + '&search=' + search)
        }
    })

    router.get('/patient-online/v9/patient-online-gp-lookup', function (req, res) {
        var serviceName = req.param('serviceName')
        var service = req.param('service')
        var hidehead = req.param('hidehead')
        var emptysearch = req.param('emptysearch')
        res.render('patient-online/v9/patient-online-gp-lookup', { serviceName: serviceName, service: service, hidehead: hidehead, emptysearch: emptysearch }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/patient-online/v8/patient-online-gp-lookup', function (req, res) {
    var postcode = req.body.gpPostcode
    var search = req.body.gpName
    var serviceName = req.param('serviceName')
    var service = req.param('service')
    var hidehead = req.param('hidehead')

    if (postcode === '' && search === '') {
      res.redirect('/patient-online/v8/patient-online-gp-lookup?serviceName=' + serviceName + '&service=' + service + '&hidehead=' + hidehead + '&postcode=' + postcode + '&search=' + search + '&emptysearch=true')
    } else {
      res.redirect('/patient-online/v8/patient-online-gp-results?serviceName=' + serviceName + '&service=' + service + '&hidehead=' + hidehead + '&postcode=' + postcode + '&search=' + search)
    }
  })

  router.get('/patient-online/v8/patient-online-gp-lookup', function (req, res) {
    var serviceName = req.param('serviceName')
    var service = req.param('service')
    var hidehead = req.param('hidehead')
    var emptysearch = req.param('emptysearch')
    res.render('patient-online/v8/patient-online-gp-lookup', { serviceName: serviceName, service: service, hidehead: hidehead, emptysearch: emptysearch }, function(err, html) {
      res.send(html)
    })
  })


  router.post('/patient-online/v7/patient-online-gp-lookup', function (req, res) {
    var postcode = req.body.gpPostcode
    var search = req.body.gpName
    var serviceName = req.param('serviceName')
    var service = req.param('service')
    var hidehead = req.param('hidehead')

    if (postcode === '' && search === '') {
      res.redirect('/patient-online/v7/patient-online-gp-lookup?serviceName=' + serviceName + '&service=' + service + '&hidehead=' + hidehead + '&postcode=' + postcode + '&search=' + search + '&emptysearch=true')
    } else {
      res.redirect('/patient-online/v7/patient-online-gp-results?serviceName=' + serviceName + '&service=' + service + '&hidehead=' + hidehead + '&postcode=' + postcode + '&search=' + search)
    }
  })

  router.get('/patient-online/v7/patient-online-gp-lookup', function (req, res) {
    var serviceName = req.param('serviceName')
    var service = req.param('service')
    var hidehead = req.param('hidehead')
    var emptysearch = req.param('emptysearch')
    res.render('patient-online/v7/patient-online-gp-lookup', { serviceName: serviceName, service: service, hidehead: hidehead, emptysearch: emptysearch }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v6/patient-online-gp-lookup', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('patient-online/v6/patient-online-gp-lookup', { serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v5/patient-online-gp-lookup', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('patient-online/v5/patient-online-gp-lookup', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}