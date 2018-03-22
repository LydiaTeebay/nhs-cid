module.exports = function (router) {
  router.get('/emails/email-validate-create', function (req, res) {
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    res.render('emails/email-validate-create', { serviceName: serviceName, service: service }, function(err, html) {
      res.send(html)
    })
  })
}