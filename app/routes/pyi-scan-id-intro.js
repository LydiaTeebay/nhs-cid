module.exports = function (router) {
    router.get('/prove-your-identity/pyi-scan-id-intro', function (req, res) {
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('prove-your-identity/pyi-scan-id-intro', {mobile: isMobile, changetomobile: changetomobile}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/prove-your-identity/v3/pyi-scan-id-intro', function (req, res) {
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('prove-your-identity/v3/pyi-scan-id-intro', {mobile: isMobile}, function(err, html) {
            res.send(html)
        })
    })
  router.get('/prove-your-identity/v2/pyi-scan-id-intro', function (req, res) {
    // is the user on a mobile device?
    var isMobile = req.useragent.isMobile
    // re-render the page along with the parameter
    res.render('prove-your-identity/v2/pyi-scan-id-intro', {mobile: isMobile}, function(err, html) {
      res.send(html)
    })
  })
    router.get('/prove-your-identity/v1/pyi-scan-id-intro', function (req, res) {
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('prove-your-identity/v1/pyi-scan-id-intro', {mobile: isMobile}, function(err, html) {
            res.send(html)
        })
    })
}
