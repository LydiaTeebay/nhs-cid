module.exports = function (router) {
    router.get('/id-checker/id-checker-log-in', function (req, res) {
        // pull in the url parameter
        var role = req.param('role')
        res.render('id-checker/id-checker-log-in', {role: role}, function(err, html) {
            res.send(html)
        })
    })
}
