module.exports = function (router) {
  router.get('/patient-online/systm-one-1', function (req, res) {
    // pull in the url parameter
      var vouched = req.param('vouch')
      var service = req.param('service')
      var serviceName = req.param('serviceName')
    // re-render the page along with the parameter
    res.render('patient-online/systm-one-1', {vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
      res.send(html)
    })
  })
}