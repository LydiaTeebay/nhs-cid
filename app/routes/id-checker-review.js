module.exports = function (router) {
    router.get('/id-checker/id-checker-review', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var role = req.param('role')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var failreason = req.param('failreason')
        res.render('id-checker/id-checker-review', { state: state, role: role, result: result, demographics: demographics, failreason: failreason }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/id-checker/v2/id-checker-review', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        res.render('id-checker/v2/id-checker-review', {state: state}, function(err, html) {
            res.send(html)
        })
    })
}
