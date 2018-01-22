module.exports = function (router) {
  router.get('/start/eRedbook', function (req, res) {
    // pull in the url parameters
    var child1name = process.env.CHILD1_NAME
    var child1age = process.env.CHILD1_AGE
    var child2name = process.env.CHILD2_NAME
    var child2age = process.env.CHILD2_AGE
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var emailAddress = req.param('emailAddress')
    var mobileNum = req.param('mobileNum')
    var verified = req.param('verified')
    // re-render the page along with the parameter
    res.render('start/eRedbook', { mobileNum: mobileNum, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, verified: verified, child1name: child1name, child1age: child1age, child2name: child2name, child2age: child2age }, function(err, html) {
      res.send(html)
    })
  })
}