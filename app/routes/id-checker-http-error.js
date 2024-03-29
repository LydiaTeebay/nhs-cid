module.exports = function (router) {
    router.get('/id-checker/id-checker-http-error', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var role = req.param('role')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var failreason = req.param('failreason')
        var formerror = req.param('formerror')
        var devMode = req.param('devMode')
        res.render('id-checker/id-checker-http-error', { state: state, role: role, result: result, demographics: demographics, failreason: failreason, formerror: formerror, devMode: devMode }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/id-checker/v5/id-checker-http-error', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var role = req.param('role')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var failreason = req.param('failreason')
        var formerror = req.param('formerror')
        var devMode = req.param('devMode')
        res.render('id-checker/v5/id-checker-http-error', { state: state, role: role, result: result, demographics: demographics, failreason: failreason, formerror: formerror, devMode: devMode }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/id-checker/v4/id-checker-http-error', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var role = req.param('role')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var failreason = req.param('failreason')
        var formerror = req.param('formerror')
        var devMode = req.param('devMode')
        res.render('id-checker/v4/id-checker-http-error', { state: state, role: role, result: result, demographics: demographics, failreason: failreason, formerror: formerror, devMode: devMode }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/id-checker/v3/id-checker-http-error', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        var role = req.param('role')
        var result = req.param('result')
        var demographics = req.param('demographics')
        var failreason = req.param('failreason')
        var formerror = req.param('formerror')
        var devMode = req.param('devMode')
        res.render('id-checker/v3/id-checker-http-error', { state: state, role: role, result: result, demographics: demographics, failreason: failreason, formerror: formerror, devMode: devMode }, function(err, html) {
            res.send(html)
        })
    })
}
