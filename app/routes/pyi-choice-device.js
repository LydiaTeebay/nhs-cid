module.exports = function (router) {
  router.get('/prove-your-identity/pyi-choice-device', function (req, res) {
    // is the user on a mobile device?
    var isMobile = req.useragent.isMobile
    // re-render the page along with the parameter
    res.render('prove-your-identity/pyi-choice-device', {mobile: isMobile}, function(err, html) {
      res.send(html)
    })
  })
    router.get('/prove-your-identity/v1/pyi-choice-device', function (req, res) {
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('prove-your-identity/v1/pyi-choice-device', {mobile: isMobile}, function(err, html) {
            res.send(html)
        })
    })
}