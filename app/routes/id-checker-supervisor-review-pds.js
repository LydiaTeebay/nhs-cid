module.exports = function (router) {
    router.get('/id-checker/id-checker-supervisor-review-pds', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var role = req.param('role')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var failreason = req.param('failreason')
        res.render('id-checker/id-checker-supervisor-review-pds', { state: state, role: role, result: result, demographics: demographics, failreason: failreason }, function(err, html) {
            res.send(html)
        })
    })
}
