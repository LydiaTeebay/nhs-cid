module.exports = function (router) {
  router.get('/prove-your-identity/pyi-continue-offline', function (req, res) {
    // pull in the url parameter
    var theReason = req.param('reason')
    // re-render the page along with the parameter
    res.render('prove-your-identity/pyi-continue-offline', {reason: theReason}, function(err, html) {
      res.send(html)
    })
  })
}