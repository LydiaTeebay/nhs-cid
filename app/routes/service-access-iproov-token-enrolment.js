module.exports = function (router) {

    router.get('/service-access/v24/service-access-iproov-token-enrolment', function (req, res) {
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
        var iproovTokenFailReason = req.param('iproovTokenFailReason')
        var iProovThirdAttempt = req.param('iProovThirdAttempt')
        var pyiSecondAttempt = req.param('pyiSecondAttempt')
        var iproovFailReason = req.param('iproovFailReason')
        var manual = req.param('manual')
        var testing = req.param('testing')

        // re-render the page along with the parameter
        res.render('service-access/v24/service-access-iproov-token-enrolment', { testing: testing, manual: manual, uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproovTokenFailReason: iproovTokenFailReason, iProovThirdAttempt: iProovThirdAttempt, pyiSecondAttempt: pyiSecondAttempt, iproovFailReason: iproovFailReason }, function(err, html) {
            res.send(html)
        })
    })
    

    router.get('/service-access/v23/service-access-iproov-token-enrolment', function (req, res) {
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
        var iproovTokenFailReason = req.param('iproovTokenFailReason')
        var iProovThirdAttempt = req.param('iProovThirdAttempt')
        var pyiSecondAttempt = req.param('pyiSecondAttempt')
        var iproovFailReason = req.param('iproovFailReason')
                var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v23/service-access-iproov-token-enrolment', { manual: manual, uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproovTokenFailReason: iproovTokenFailReason, iProovThirdAttempt: iProovThirdAttempt, pyiSecondAttempt: pyiSecondAttempt, iproovFailReason: iproovFailReason }, function(err, html) {
            res.send(html)
        })
    })
    
    router.get('/service-access/v22/service-access-iproov-token-enrolment', function (req, res) {
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
        var iproovTokenFailReason = req.param('iproovTokenFailReason')
        var iProovThirdAttempt = req.param('iProovThirdAttempt')
        var pyiSecondAttempt = req.param('pyiSecondAttempt')
        // re-render the page along with the parameter
        res.render('service-access/v22/service-access-iproov-token-enrolment', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproovTokenFailReason: iproovTokenFailReason, iProovThirdAttempt: iProovThirdAttempt, pyiSecondAttempt: pyiSecondAttempt }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v21/service-access-iproov-token-enrolment', function (req, res) {
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
        var iproovTokenFailReason = req.param('iproovTokenFailReason')
        var iProovThirdAttempt = req.param('iProovThirdAttempt')
        var pyiSecondAttempt = req.param('pyiSecondAttempt')
        // re-render the page along with the parameter
        res.render('service-access/v21/service-access-iproov-token-enrolment', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproovTokenFailReason: iproovTokenFailReason, iProovThirdAttempt: iProovThirdAttempt, pyiSecondAttempt: pyiSecondAttempt }, function(err, html) {
            res.send(html)
        })
    })
}
