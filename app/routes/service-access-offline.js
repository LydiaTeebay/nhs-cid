module.exports = function (router) {
    router.get('/service-access/service-access-offline', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var signedin = req.param('signedin')
        // re-render the page along with the parameter
        res.render('service-access/service-access-offline', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, signedin: signedin }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v10/service-access-offline', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var signedin = req.param('signedin')
        // re-render the page along with the parameter
        res.render('service-access/v10/service-access-offline', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, signedin: signedin }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/pb/service-access-offline', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var signedin = req.param('signedin')
        // re-render the page along with the parameter
        res.render('service-access/pb/service-access-offline', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, signedin: signedin }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v9/service-access-offline', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var signedin = req.param('signedin')
        // re-render the page along with the parameter
        res.render('service-access/v9/service-access-offline', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, signedin: signedin }, function(err, html) {
            res.send(html)
        })
    })
}