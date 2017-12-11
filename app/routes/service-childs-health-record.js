module.exports = function (router) {
  router.get('/start/service-childs-health-record', function (req, res) {
    // pull in the url parameter
      var sidebar = req.param('sidebar')
      var mobileNum = req.param('mobileNum')
      var email = req.param('email')
      var message = req.param('message')
    // re-render the page along with the parameter
    res.render('start/service-childs-health-record', {sidebar: sidebar, mobileNum: mobileNum, message: message, email: email}, function(err, html) {
      res.send(html)
    })
  })
}