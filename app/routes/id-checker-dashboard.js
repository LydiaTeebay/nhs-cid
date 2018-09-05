module.exports = function (router) {
    router.get('/id-checker/id-checker-dashboard', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var role = req.param('role')
        var emailLink = req.param('emailLink')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var devmode = req.param('devMode')

        if (role === 'Supervisor') {
            res.redirect('/id-checker/id-checker-supervisor-dashboard?role=Supervisor' + '&emailLink=' + emailLink + '&state=' + state + '&result=' + result + '&demographics=' + demographics )
            return
        }
        res.render('id-checker/id-checker-dashboard', {state: state, emailLink: emailLink, role: role, result: result, demographics: demographics, devMode: devmode }, function(err, html) {
            res.send(html)
        })

    })
    router.get('/id-checker/v2/id-checker-dashboard', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var emailLink = req.param('emailLink')
        res.render('id-checker/v2/id-checker-dashboard', {state: state, emailLink: emailLink}, function(err, html) {
            res.send(html)
        })
    })
}
