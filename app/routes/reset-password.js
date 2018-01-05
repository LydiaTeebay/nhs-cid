module.exports = function (router) {
    router.get('/create-account/reset-password', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/reset-password', {vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v4/reset-password', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v4/reset-password', {vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v3/reset-password', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v3/reset-password', {vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
}