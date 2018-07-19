module.exports = function (router) {
    router.get('/name-study/screening-2', function (req, res) {
        // pull in the url parameters
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var country = req.param('country')
        // re-render the page along with the parameter
        res.render('name-study/screening-2', { country: country, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/name-study/screening-2', function (req, res) {
        // pull in the url parameters
        var country = req.param('country')
        var age = req.body.age
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')

        if (age === 'under-16') {
            res.redirect('/name-study/screening-3?age=' + age + '&country=' + country + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy )
        } else {
            res.redirect('/name-study/screening-3?age=' + age + '&country=' + country + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy )
        }
    })
}