module.exports = function (router) {
    router.get('/id-checker/id-checker-review-automated-ocr', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var role = req.param('role')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var failreason = req.param('failreason')
        var formerror = req.param('formerror')
        var devMode = req.param('devMode')
        var idType = req.param('idType')
        res.render('id-checker/id-checker-review-automated-ocr', { state: state, role: role, result: result, demographics: demographics, failreason: failreason, formerror: formerror, devMode: devMode, idType:idType }, function(err, html) {
            res.send(html)
        })
    })
}
