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