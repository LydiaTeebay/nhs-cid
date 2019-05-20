module.exports = function (router) {
    router.get('/id-checker/id-checker-panel-review', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var queue = req.param('queue')
        var holding = req.param('holding')
        var role = req.param('role')
        var emailLink = req.param('emailLink')
        var devmode = req.param('devMode')
        var noabort = req.param('noabort')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var failreason = req.param('failreason')
        res.render('id-checker/id-checker-panel-review', {state: state, emailLink: emailLink, role: role, devMode: devmode, queue: queue, holding: holding, noabort: noabort, result: result, demographics: demographics, failreason: failreason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/id-checker/v5/id-checker-panel-review', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var queue = req.param('queue')
        var holding = req.param('holding')
        var role = req.param('role')
        var emailLink = req.param('emailLink')
        var devmode = req.param('devMode')
        var noabort = req.param('noabort')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var failreason = req.param('failreason')
        res.render('id-checker/v5/id-checker-panel-review', {state: state, emailLink: emailLink, role: role, devMode: devmode, queue: queue, holding: holding, noabort: noabort, result: result, demographics: demographics, failreason: failreason }, function(err, html) {
            res.send(html)
        })
    })
}
