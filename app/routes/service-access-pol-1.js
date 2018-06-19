module.exports = function (router) {
    router.get('/service-access/service-access-pol-1', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('service-access/service-access-pol-1', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v9/service-access-pol-1', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system');
        var practiceID = req.param('practiceID');
        // re-render the page along with the parameter
        res.render('service-access/v9/service-access-pol-1', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, system: system, practiceID: practiceID }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v8/service-access-pol-1', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var system = req.param('system');
        // re-render the page along with the parameter
        res.render('service-access/v8/service-access-pol-1', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, system: system }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/mvp/service-access-pol-1', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('service-access/mvp/service-access-pol-1', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
}