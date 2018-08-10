module.exports = function (router) {
    router.get('/name-study/survey', function (req, res) {
        // pull in the url parameters
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var country = req.param('country')
        var age = req.param('age')
        var healthcare = req.param('healthcare')
        // re-render the page along with the parameter
        res.render('name-study/survey', { healthcare: healthcare, age: age, country: country, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/name-study/survey', function (req, res) {
        // pull in the url parameters
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var country = req.param('country')
        var age = req.param('age')
        var healthcare = req.param('healthcare')
        // re-render the page along with the parameter
        res.redirect('http://globaltestmarket.com/20/survey/finished.phtml?ac=' + lsAccess + '&sn=595218&lang=E')

    })

    router.get('/remote-testing/survey', function (req, res) {
        // pull in the url parameters
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var country = req.param('country')
        var age = req.param('age')
        var healthcare = req.param('healthcare')
        // re-render the page along with the parameter
        res.render('remote-testing/survey', { healthcare: healthcare, age: age, country: country, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/remote-testing/survey', function (req, res) {
        // pull in the url parameters
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var country = req.param('country')
        var age = req.param('age')
        var healthcare = req.param('healthcare')
        // re-render the page along with the parameter
        res.redirect('http://www.surveybods.com/uc/admin/' + lsStudy + '/ospe.php?c_0001=1&return_tic=' + lsId)

    })

    router.get('/name-study/v2/survey', function (req, res) {
        // pull in the url parameters
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var country = req.param('country')
        var age = req.param('age')
        var healthcare = req.param('healthcare')
        // re-render the page along with the parameter
        res.render('name-study/v2/survey', { healthcare: healthcare, age: age, country: country, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
}
