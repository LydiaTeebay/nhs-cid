module.exports = function (router) {
    router.get('/id-checker/id-checker-dashboard', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        res.render('id-checker/id-checker-dashboard', {state: state}, function(err, html) {
            res.send(html)
        })
    })
}
