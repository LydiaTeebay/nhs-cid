module.exports = function (router) {
  router.get('/create-account/verified-email', function (req, res) {
    // pull in the url parameter
    var query = req.query
    console.log(query)
    // re-render the page along with the parameter
    res.render('create-account/verified-email', {reason: query}, function(err, html) {
      res.send(html)
    })
  })
}