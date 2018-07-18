module.exports = function (router) {
  router.get('/', function (req, res) {
    res.render('index', {
      title: 'NHSUK prototype kit'
    })
  })

    router.get('/naming-study/index', function (req, res) {
        // pull in the url parameter
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        res.render('naming-study/index', {lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })
}
