module.exports = function (router) {
  router.get('/emails/email-validate', function (req, res) {
    // pull in the url parameter
    var theReason = req.param('reason')
    // re-render the page along with the parameter
    res.render('emails/email-validate', {reason: theReason}, function(err, html) {
      res.send(html)
    })
  })
}