module.exports = function (router) {

    router.get('/service-access/v24/service-access-offline-confirmation', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var isMobile = req.useragent.isMobile
        var place = req.param('place')
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var postcode = req.param('postcode')
        var manual = req.param('manual')
        var testing = req.param('testing')

        // re-render the page along with the parameter
        res.render('service-access/v24/service-access-offline-confirmation', { testing: testing, manual: manual, uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, place: place, isMobile: isMobile, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, postcode: postcode }, function(err, html) {
            res.send(html)
        })
    })


    router.get('/service-access/v23/service-access-offline-confirmation', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var isMobile = req.useragent.isMobile
        var place = req.param('place')
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var postcode = req.param('postcode')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v23/service-access-offline-confirmation', { manual: manual, uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, place: place, isMobile: isMobile, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, postcode: postcode }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v22/service-access-offline-confirmation', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var isMobile = req.useragent.isMobile
        var place = req.param('place')
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var postcode = req.param('postcode')
        // re-render the page along with the parameter
        res.render('service-access/v22/service-access-offline-confirmation', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, place: place, isMobile: isMobile, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, postcode: postcode }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v14/service-access-offline-confirmation', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var isMobile = req.useragent.isMobile
        var place = req.param('place')
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var postcode = req.param('postcode')
        // re-render the page along with the parameter
        res.render('service-access/v14/service-access-offline-confirmation', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, place: place, isMobile: isMobile, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, postcode: postcode }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/demo/service-access-offline-confirmation', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var isMobile = req.useragent.isMobile
        var place = req.param('place')
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var postcode = req.param('postcode')
        // re-render the page along with the parameter
        res.render('service-access/demo/service-access-offline-confirmation', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, place: place, isMobile: isMobile, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, postcode: postcode }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v13/service-access-offline-confirmation', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var isMobile = req.useragent.isMobile
        var place = req.param('place')
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var postcode = req.param('postcode')
        // re-render the page along with the parameter
        res.render('service-access/v13/service-access-offline-confirmation', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, place: place, isMobile: isMobile, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, postcode: postcode }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v12/service-access-offline-confirmation', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var isMobile = req.useragent.isMobile
        var place = req.param('place')
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var postcode = req.param('postcode')
        // re-render the page along with the parameter
        res.render('service-access/v12/service-access-offline-confirmation', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, place: place, isMobile: isMobile, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, postcode: postcode }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v11/service-access-offline-confirmation', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var isMobile = req.useragent.isMobile
        var place = req.param('place')
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var postcode = req.param('postcode')
        // re-render the page along with the parameter
        res.render('service-access/v11/service-access-offline-confirmation', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, place: place, isMobile: isMobile, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, postcode: postcode }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/pb/service-access-offline-confirmation', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var place = req.param('place')
        var isMobile = req.useragent.isMobile
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/pb/service-access-offline-confirmation', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, place: place, hidehead: hidehead, challenge: challenge, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })
}