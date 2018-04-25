module.exports = function (router) {
    router.get('/id-checker/id-checker-review', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        res.render('id-checker/id-checker-review', {state: state}, function(err, html) {
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
