module.exports = function (router) {
    router.get('/name-study/video', function (req, res) {
        // pull in the url parameters
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var country = req.param('country')
        var age = req.param('age')
        var healthcare = req.param('healthcare')
        // re-render the page along with the parameter
        res.render('name-study/video', { healthcare: healthcare, age: age, country: country, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/name-study/v2/video', function (req, res) {
        // pull in the url parameters
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var country = req.param('country')
        var age = req.param('age')
        var healthcare = req.param('healthcare')
        // re-render the page along with the parameter
        res.render('name-study/v2/video', { healthcare: healthcare, age: age, country: country, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
}