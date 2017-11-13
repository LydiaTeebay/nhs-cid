module.exports = function (router) {
  router.get('/create-account/two-step-thanks', function (req, res) {
    // pull in the url parameter
    var vouched = req.param('vouch')
    // vouched users bypass this page and set a password
    if (vouched === 'yes') {
      res.redirect('/create-account/set-password?vouch=yes')
      return
    }
    // re-render the page along with the parameter
    res.render('create-account/two-step-thanks', {vouch: vouched}, function(err, html) {
      res.send(html)
    })
  })
}