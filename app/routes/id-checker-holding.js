module.exports = function (router) {
    router.get('/id-checker/id-checker-holding', function (req, res) {
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

        if (role === 'Supervisor') {
            res.redirect('/id-checker/id-checker-supervisor-dashboard?role=Supervisor' + '&emailLink=' + emailLink + '&state=' + state + '&result=' + result + '&demographics=' + demographics + '&queue=' + queue + '&holding=' + holding + '&noabort=' + noabort )
            return
        }
        res.render('id-checker/id-checker-holding', {state: state, emailLink: emailLink, role: role, result: result, demographics: demographics, devMode: devmode, queue: queue, holding: holding, noabort: noabort }, function(err, html) {
            res.send(html)
        })

    })

    router.get('/id-checker/v5/id-checker-holding', function (req, res) {
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

        if (role === 'Supervisor') {
            res.redirect('/id-checker/v5/id-checker-supervisor-dashboard?role=Supervisor' + '&emailLink=' + emailLink + '&state=' + state + '&result=' + result + '&demographics=' + demographics + '&queue=' + queue + '&holding=' + holding + '&noabort=' + noabort )
            return
        }
        res.render('id-checker/v5/id-checker-holding', {state: state, emailLink: emailLink, role: role, result: result, demographics: demographics, devMode: devmode, queue: queue, holding: holding, noabort: noabort }, function(err, html) {
            res.send(html)
        })

    })

    router.get('/id-checker/v4/id-checker-holding', function (req, res) {
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

        if (role === 'Supervisor') {
            res.redirect('/id-checker/v4/id-checker-supervisor-dashboard?role=Supervisor' + '&emailLink=' + emailLink + '&state=' + state + '&result=' + result + '&demographics=' + demographics + '&queue=' + queue + '&holding=' + holding + '&noabort=' + noabort )
            return
        }
        res.render('id-checker/v4/id-checker-holding', {state: state, emailLink: emailLink, role: role, result: result, demographics: demographics, devMode: devmode, queue: queue, holding: holding, noabort: noabort }, function(err, html) {
            res.send(html)
        })

    })
}
