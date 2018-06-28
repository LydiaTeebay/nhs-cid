module.exports = function (router) {
    router.get('/service-access/v9/service-access-triage-2', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('service-access/v9/service-access-triage-2', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
}