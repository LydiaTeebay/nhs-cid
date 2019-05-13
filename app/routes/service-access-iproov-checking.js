module.exports = function (router) {
    router.get('/service-access/v16/service-access-iproov-checking', function (req, res) {
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
        res.render('service-access/v16/service-access-iproov-checking', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproovFailReason: iproovFailReason, iProovSecondAttempt: iProovSecondAttempt, pyiSecondAttempt: pyiSecondAttempt }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v15/service-access-iproov-checking', function (req, res) {
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
        var iproov = req.param('iproov')
        var iproovPass = req.param('iproovPass')

        if ( iproov !== '' || iproov !== 'undefined' ) {
            iproov = 'true'
        } else {
            iproov = 'false'
        }
        // re-render the page along with the parameter
        res.render('service-access/v15/service-access-iproov-checking', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproov: iproov }, function(err, html) {
            res.send(html)
        })
    })

}