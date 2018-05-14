module.exports = function (router) {
    router.get('/id-verification/id-verification-approve', function (req, res) {
        // pull in the url parameter
        var state = req.param('state')
        res.render('id-verification/id-verification-approve', {state: state}, function(err, html) {
            res.send(html)
        })
    })
}
