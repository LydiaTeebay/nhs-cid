module.exports = function (router) {
    router.get('/name-study/instructions', function (req, res) {
        // pull in the url parameters
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var country = req.param('country')
        var age = req.param('age')
        var healthcare = req.param('healthcare')
        // re-render the page along with the parameter
        res.render('name-study/instructions', { healthcare: healthcare, age: age, country: country, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
}