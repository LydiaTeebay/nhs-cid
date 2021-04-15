module.exports = function (router) {
    router.get('/service-access/v23/service-access-what-you-need', function (req, res) {
        // pull in the url parameters
        var showWarning = req.param('showWarning')
        var throttleAlert = req.param('throttleAlert')
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var loggedin = req.param('loggedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        var drop = req.param('drop')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v23/service-access-what-you-need', { showWarning: showWarning, throttleAlert: throttleAlert, uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, poluser: poluser, loggedin: loggedin, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, iproov: iproov, desk: desk, drop: drop, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

}