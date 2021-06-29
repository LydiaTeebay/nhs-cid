module.exports = function (router) {


    router.get('/service-access/v24/service-access-completed', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailLink = req.param('emailLink')
        var complete = req.param('complete')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v24/service-access-completed', { manual: manual, uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, emailLink: emailLink, complete: complete }, function(err, html) {
            res.send(html)
        })
    })


    router.get('/service-access/v23/service-access-completed', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailLink = req.param('emailLink')
        var complete = req.param('complete')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v23/service-access-completed', { manual: manual, uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, emailLink: emailLink, complete: complete }, function(err, html) {
            res.send(html)
        })
    })


    router.get('/service-access/v22/service-access-completed', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailLink = req.param('emailLink')
        var complete = req.param('complete')
        // re-render the page along with the parameter
        res.render('service-access/v22/service-access-completed', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, emailLink: emailLink, complete: complete }, function(err, html) {
            res.send(html)
        })
    })


    router.get('/service-access/v20/service-access-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailLink = req.param('emailLink')
        var complete = req.param('complete')
        // re-render the page along with the parameter
        res.render('service-access/v20/service-access-completed', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, emailLink: emailLink, complete: complete }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v19/service-access-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailLink = req.param('emailLink')
        var complete = req.param('complete')
        // re-render the page along with the parameter
        res.render('service-access/v19/service-access-completed', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, emailLink: emailLink, complete: complete }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v18/service-access-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailLink = req.param('emailLink')
        var complete = req.param('complete')
        // re-render the page along with the parameter
        res.render('service-access/v18/service-access-completed', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, emailLink: emailLink, complete: complete }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v17/service-access-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailLink = req.param('emailLink')
        var complete = req.param('complete')
        // re-render the page along with the parameter
        res.render('service-access/v17/service-access-completed', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, emailLink: emailLink, complete: complete }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v16/service-access-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailLink = req.param('emailLink')
        var complete = req.param('complete')
        // re-render the page along with the parameter
        res.render('service-access/v16/service-access-completed', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, emailLink: emailLink, complete: complete }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v15/service-access-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailLink = req.param('emailLink')
        var complete = req.param('complete')
        // re-render the page along with the parameter
        res.render('service-access/v15/service-access-completed', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, emailLink: emailLink, complete: complete }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v14/service-access-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailLink = req.param('emailLink')
        var complete = req.param('complete')
        // re-render the page along with the parameter
        res.render('service-access/v14/service-access-completed', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, emailLink: emailLink, complete: complete }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/demo/service-access-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailLink = req.param('emailLink')
        var complete = req.param('complete')
        // re-render the page along with the parameter
        res.render('service-access/demo/service-access-completed', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, emailLink: emailLink, complete: complete }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v13/service-access-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var emailLink = req.param('emailLink')
        var complete = req.param('complete')
        // re-render the page along with the parameter
        res.render('service-access/v13/service-access-completed', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, emailLink: emailLink, complete: complete }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/pb/service-access-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var complete = req.param('complete')
        // re-render the page along with the parameter
        res.render('service-access/pb/service-access-completed', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, complete: complete }, function(err, html) {
            res.send(html)
        })
    })
}