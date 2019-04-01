module.exports = function (router) {
    router.get('/id-checker/id-checker-supervisor-dashboard', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var queue = req.param('queue')
        var holding = req.param('holding')
        var role = req.param('role')
        var emailLink = req.param('emailLink')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var devmode = req.param('devMode')
        var noabort = req.param('noabort')
        res.render('id-checker/id-checker-supervisor-dashboard', {state: state, emailLink: emailLink, role: role, result: result, demographics: demographics, devMode: devmode, queue: queue, holding: holding, noabort: noabort }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/id-checker/v3/id-checker-supervisor-dashboard', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var role = req.param('role')
        var result = req.param('result')
        var emailLink = req.param('emailLink')
        res.render('id-checker/v3/id-checker-supervisor-dashboard', {state: state, emailLink: emailLink, role: role, result: result }, function(err, html) {
            res.send(html)
        })
    })
}
