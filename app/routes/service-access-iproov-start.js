module.exports = function (router) {

    router.get('/service-access/v24/service-access-iproov-start', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var pinCode = Math.floor(1000 + Math.random() * 9000)
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproovFailReason = req.param('iproovFailReason')
        var iProovThirdAttempt = req.param('iProovThirdAttempt')
        var pyiSecondAttempt = req.param('pyiSecondAttempt')
        var iproovFailReason = req.param('iproovFailReason')
        var manual = req.param('manual')
        var testing = req.param('testing')
        var lsId = req.param('lsId')
        var lsStudy = req.param('lsStudy')

        // re-render the page along with the parameter
        res.render('service-access/v24/service-access-iproov-start', { lsId: lsId, lsStudy: lsStudy, testing: testing, manual: manual, uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproovFailReason: iproovFailReason, iProovThirdAttempt: iProovThirdAttempt, pyiSecondAttempt: pyiSecondAttempt, iproovFailReason: iproovFailReason }, function(err, html) {
            res.send(html)
        })
    })


    router.get('/service-access/v23/service-access-iproov-start', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var pinCode = Math.floor(1000 + Math.random() * 9000)
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproovFailReason = req.param('iproovFailReason')
        var iProovThirdAttempt = req.param('iProovThirdAttempt')
        var pyiSecondAttempt = req.param('pyiSecondAttempt')
        var iproovFailReason = req.param('iproovFailReason')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v23/service-access-iproov-start', { manual: manual, uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproovFailReason: iproovFailReason, iProovThirdAttempt: iProovThirdAttempt, pyiSecondAttempt: pyiSecondAttempt, iproovFailReason: iproovFailReason }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v22/service-access-iproov-start', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var pinCode = Math.floor(1000 + Math.random() * 9000)
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproovFailReason = req.param('iproovFailReason')
        var iProovThirdAttempt = req.param('iProovThirdAttempt')
        var pyiSecondAttempt = req.param('pyiSecondAttempt')
        // re-render the page along with the parameter
        res.render('service-access/v22/service-access-iproov-start', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproovFailReason: iproovFailReason, iProovThirdAttempt: iProovThirdAttempt, pyiSecondAttempt: pyiSecondAttempt }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v21/service-access-iproov-start', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var pinCode = Math.floor(1000 + Math.random() * 9000)
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproovFailReason = req.param('iproovFailReason')
        var iProovThirdAttempt = req.param('iProovThirdAttempt')
        var pyiSecondAttempt = req.param('pyiSecondAttempt')
        // re-render the page along with the parameter
        res.render('service-access/v21/service-access-iproov-start', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproovFailReason: iproovFailReason, iProovThirdAttempt: iProovThirdAttempt, pyiSecondAttempt: pyiSecondAttempt }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v20/service-access-iproov-start', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var pinCode = Math.floor(1000 + Math.random() * 9000)
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproovFailReason = req.param('iproovFailReason')
        var iProovSecondAttempt = req.param('iProovSecondAttempt')
        var pyiSecondAttempt = req.param('pyiSecondAttempt')
        // re-render the page along with the parameter
        res.render('service-access/v20/service-access-iproov-start', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproovFailReason: iproovFailReason, iProovSecondAttempt: iProovSecondAttempt, pyiSecondAttempt: pyiSecondAttempt }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v19/service-access-iproov-start', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var pinCode = Math.floor(1000 + Math.random() * 9000)
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproovFailReason = req.param('iproovFailReason')
        var iProovSecondAttempt = req.param('iProovSecondAttempt')
        var pyiSecondAttempt = req.param('pyiSecondAttempt')
        // re-render the page along with the parameter
        res.render('service-access/v19/service-access-iproov-start', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproovFailReason: iproovFailReason, iProovSecondAttempt: iProovSecondAttempt, pyiSecondAttempt: pyiSecondAttempt }, function(err, html) {
            res.send(html)
        })
    })

}
