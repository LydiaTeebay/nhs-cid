module.exports = function (router) {
    router.get('/name-study/screening-1', function (req, res) {
        // pull in the url parameters
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('name-study/screening-1', { lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/name-study/screening-1', function (req, res) {
        // pull in the url parameters
        var country = req.body.country
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')

        if (country === 'england') {
            res.redirect('/name-study/screening-2?country=' + country + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy )
        } else {
            res.redirect('/name-study/screening-1?country=' + country + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy )
        }
    })
}