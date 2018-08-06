module.exports = function (router) {
  router.get('/', function (req, res) {
    res.render('index', {
      title: 'NHSUK prototype kit'
    })
  })

    router.get('/name-study', function (req, res) {
        // pull in the url parameter
        var lsId = req.param('lsId')

        // grab LightSpeed ID if there is one
        if (req.param('lsAccess') ){
            var lsAccess = req.param('lsAccess')
        } else {
            var lsAccess = req.param('ac')
        }

        var lsStudy = req.param('lsStudy')
        res.render('name-study/index', {lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy}, function(err, html) {
            res.send(html)
        })
    })
}
