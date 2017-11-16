module.exports = function (router) {
  router.get('/create-account/v1/create-1', function (req, res) {
    // pull in the url parameter
    var vouched = req.param('vouch')
    console.log(vouched)
    // re-render the page along with the parameter
    res.render('create-account/v1/create-1', {vouch: vouched}, function(err, html) {
      res.send(html)
    })
  })
}