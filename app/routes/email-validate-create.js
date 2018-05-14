module.exports = function (router) {
  router.get('/emails/email-validate-create', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var hidehead = req.param('hidehead')
    res.render('emails/email-validate-create', { serviceName: serviceName, service: service, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

    router.get('/emails/mvp/email-validate-create', function (req, res) {
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        res.render('emails/mvp/email-validate-create', { serviceName: serviceName, service: service, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })
}