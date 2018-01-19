module.exports = function (router) {
  router.get('/start/eRedbook', function (req, res) {
    // pull in the url parameters
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var emailAddress = req.param('emailAddress')
    var mobileNum = req.param('mobileNum')
    // re-render the page along with the parameter
    res.render('start/eRedbook', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress  }, function(err, html) {
      res.send(html)
    })
  })
}