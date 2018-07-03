module.exports = function (router) {
  router.get('/emails/email-validate-create-mob', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    var poluser = req.param('poluser')
    res.render('emails/email-validate-create-mob', { serviceName: serviceName, service: service, hidehead: hidehead, poluser: poluser }, function(err, html) {
      res.send(html)
    })
  })

    router.get('/emails/pb/email-validate-create-mob', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.render('emails/pb/email-validate-create-mob', { serviceName: serviceName, service: service, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/v1/email-validate-create-mob', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.render('emails/v1/email-validate-create-mob', { serviceName: serviceName, service: service, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/emails/mvp/email-validate-create-mob', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.render('emails/mvp/email-validate-create-mob', { serviceName: serviceName, service: service, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
}