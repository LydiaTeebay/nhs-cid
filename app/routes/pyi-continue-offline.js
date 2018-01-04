module.exports = function (router) {

    router.get('/prove-your-identity/pyi-continue-offline', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        // re-render the page along with the parameter
        res.render('prove-your-identity/pyi-continue-offline', {reason: theReason}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/prove-your-identity/v4/pyi-continue-offline', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        // re-render the page along with the parameter
        res.render('prove-your-identity/v4/pyi-continue-offline', {reason: theReason}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/prove-your-identity/v3/pyi-continue-offline', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        // re-render the page along with the parameter
        res.render('prove-your-identity/v3/pyi-continue-offline', {reason: theReason}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/prove-your-identity/v2/pyi-continue-offline', function (req, res) {
        // pull in the url parameter
        var theReason = req.param('reason')
        // re-render the page along with the parameter
        res.render('prove-your-identity/v2/pyi-continue-offline', {reason: theReason}, function(err, html) {
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