module.exports = function (router) {
  router.get('/patient-online/patient-online-linkage-key', function (req, res) {
      var vouched = req.param('vouch')
      var service = req.param('service')
      var serviceName = req.param('serviceName')
      var mobileNum = req.param('mobileNum')
      var emailAddress = req.param('emailAddress')
      var hidehead = req.param('hidehead')
      var poluser = req.param('poluser')
    res.render('patient-online/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser }, function(err, html) {
      res.send(html)
    })
  })

    router.get('/patient-online/v11/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v11/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/v10/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('patient-online/v10/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/pb/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        var result = req.param('result')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        res.render('patient-online/pb/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin, result: result }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/patient-online/v9/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        var practiceID = req.param('practiceID')
        var loggedin = req.param('loggedin')
        res.render('patient-online/v9/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser, system: system, practiceID: practiceID, loggedin: loggedin }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/patient-online/v8/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system')
        res.render('patient-online/v8/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser, system: system }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/patient-online/mvp/patient-online-linkage-key', function (req, res) {
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.render('patient-online/mvp/patient-online-linkage-key', { vouch: vouched, service: service, serviceName: serviceName, mobileNum: mobileNum, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

  router.get('/patient-online/v7/patient-online-linkage-key', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var system = req.param('system')
    var hidehead = req.param('hidehead')
    res.render('patient-online/v7/patient-online-linkage-key', { serviceName: serviceName, service: service, system: system, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v6/patient-online-linkage-key', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('patient-online/v6/patient-online-linkage-key', { serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v5/patient-online-linkage-key', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('patient-online/v5/patient-online-linkage-key', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}