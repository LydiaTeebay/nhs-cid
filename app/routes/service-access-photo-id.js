module.exports = function (router) {
    router.get('/service-access/service-access-photo-id', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/service-access-photo-id', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v11/service-access-photo-id', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('service-access/v11/service-access-photo-id', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v10/service-access-photo-id', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('service-access/v10/service-access-photo-id', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/pb/service-access-photo-id', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/pb/service-access-photo-id', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v9/service-access-photo-id', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/v9/service-access-photo-id', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v8/service-access-photo-id', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/v8/service-access-photo-id', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/mvp/service-access-photo-id', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/mvp/service-access-photo-id', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v4/service-access-photo-id', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/v4/service-access-photo-id', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v3/service-access-photo-id', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('service-access/v3/service-access-photo-id', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
}