module.exports = function (router) {
    router.get('/name-study/screening-3', function (req, res) {
        // pull in the url parameters
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var country = req.param('country')
        var age = req.param('age')
        // re-render the page along with the parameter
        res.render('name-study/screening-3', { age: age, country: country, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/name-study/screening-3', function (req, res) {
        // pull in the url parameters
        var country = req.param('country')
        var age = req.body.age
        var healthcare = req.body.healthcare
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')

        if (healthcare === 'nhs' || healthcare === 'nhs-private') {
            res.redirect('/name-study/instructions?healthcare=' + healthcare + '&age=' + age + '&country=' + country + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy )
        } else {
            res.redirect('/name-study/screening-1?healthcare=' + healthcare + '&age=' + age + '&country=' + country + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy )
        }
    })
}