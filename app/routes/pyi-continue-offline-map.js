module.exports = function (router) {
    router.get('/prove-your-identity/pyi-continue-offline-map', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('prove-your-identity/pyi-continue-offline-map', {reason: theReason, mobile: isMobile}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/prove-your-identity/v4/pyi-continue-offline-map', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('prove-your-identity/v4/pyi-continue-offline-map', {reason: theReason, mobile: isMobile}, function(err, html) {
            res.send(html)
        })
    })
}