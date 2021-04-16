module.exports = function (router) {

    router.get('/service-access/v23/service-access-offline-retrieve', function (req, res) {
        // pull in the url parameters
        var throttle = req.param('throttle')
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var signedin = req.param('signedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var drop = req.param('drop')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v23/service-access-offline-retrieve', { throttle: throttle, uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, signedin: signedin, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, drop: drop, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v22/service-access-offline-retrieve', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var signedin = req.param('signedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var drop = req.param('drop')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v22/service-access-offline-retrieve', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, signedin: signedin, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, drop: drop, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v21/service-access-offline-retrieve', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var signedin = req.param('signedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var drop = req.param('drop')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v21/service-access-offline-retrieve', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, signedin: signedin, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, drop: drop, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v20/service-access-offline-retrieve', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var signedin = req.param('signedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var drop = req.param('drop')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v20/service-access-offline-retrieve', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, signedin: signedin, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, drop: drop, manual: manual }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v19/service-access-offline-retrieve', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var signedin = req.param('signedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var drop = req.param('drop')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v19/service-access-offline-retrieve', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, signedin: signedin, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, drop: drop, manual: manual }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v18/service-access-offline-retrieve', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var signedin = req.param('signedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v18/service-access-offline-retrieve', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, signedin: signedin, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v17/service-access-offline-retrieve', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var signedin = req.param('signedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v17/service-access-offline-retrieve', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, signedin: signedin, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v16/service-access-offline-retrieve', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var signedin = req.param('signedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v16/service-access-offline-retrieve', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, signedin: signedin, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })
}