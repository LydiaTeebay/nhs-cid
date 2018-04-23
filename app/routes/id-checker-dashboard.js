module.exports = function (router) {
    router.get('/id-checker/id-checker-dashboard', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var role = req.param('role')
        var emailLink = req.param('emailLink')

        if (role === 'Supervisor') {
            res.redirect('/id-checker/id-checker-supervisor-dashboard?role=Supervisor')
            return
        }
        res.render('id-checker/id-checker-dashboard', {state: state, emailLink: emailLink, role: role}, function(err, html) {
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
