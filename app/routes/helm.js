module.exports = function (router) {
    router.get('/start/v8/helm', function (req, res) {
        // pull in the url parameters
       /* var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var poluser = req.param('poluser')
        var result = req.param('result')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')     
*/
        var mobileNum = req.param('mobileNum')
        // re-render the page along with the parameter
        res.render('start/v8/helm', { mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })

    })

}