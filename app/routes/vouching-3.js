module.exports = function (router) {
  router.get('/vouching/vouching-3', function (req, res) {
    // pull in the url parameter
    var theReason = req.param('reason')
    // re-render the page along with the parameter
    res.render('vouching/vouching-3', {reason: theReason}, function(err, html) {
      res.send(html)
    })
  })

  router.get('/vouching/v2/vouching-3', function (req, res) {
    // pull in the url parameter
    var theReason = req.param('reason')
    // re-render the page along with the parameter
    res.render('vouching/v2/vouching-3', {reason: theReason}, function(err, html) {
      res.send(html)
    })
  })

  router.get('/vouching/v4/vouching-3', function (req, res) {
    // pull in the url parameter
    var theReason = req.param('reason')
    // re-render the page along with the parameter
    res.render('vouching/v4/vouching-3', {reason: theReason}, function(err, html) {
      res.send(html)
    })
  })
}