module.exports = function (router) {
    router.get('/id-checker/id-checker-supervisor-contested-periods', function (req, res) {
        // pull in the url paramete
        var state = req.param('state')
        var queue = req.param('queue')
        var holding = req.param('holding')
        var role = req.param('role')
        var emailLink = req.param('emailLink')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var devmode = req.param('devMode')
        var noabort = req.param('noabort')
        res.render('id-checker/id-checker-supervisor-contested-periods', {state: state, emailLink: emailLink, role: role, result: result, demographics: demographics, devMode: devmode, queue: queue, holding: holding, noabort: noabort}, function(err, html) {
            res.send(html)
        })
    })
}
