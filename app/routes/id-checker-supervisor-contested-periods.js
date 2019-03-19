module.exports = function (router) {
    router.get('/id-checker/id-checker-supervisor-contested', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var role = req.param('role')
        var emailLink = req.param('emailLink')
        res.render('id-checker/id-checker-supervisor-contested', {state: state, emailLink: emailLink, role: role}, function(err, html) {
            res.send(html)
        })
    })
}
