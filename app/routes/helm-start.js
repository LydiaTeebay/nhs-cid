module.exports = function (router) {
    router.get('/start/v12/helm-start', function (req, res) {
        var mobileNum = req.param('mobileNum')
        // re-render the page along with the parameter
        res.render('start/v12/helm-start', { mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/start/v7/helm-start', function (req, res) {
        var mobileNum = req.param('mobileNum')
        // re-render the page along with the parameter
        res.render('start/v7/helm-start', { mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })

}