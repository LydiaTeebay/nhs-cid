module.exports = function (router) {

    router.get('/service-access/v24/service-access-video-selfie-write-camera-html5-instructions', function (req, res) {
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
        var testing = req.param('testing')
        var lsId = req.param('lsId')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('service-access/v24/service-access-video-selfie-write-camera-html5-instructions', { lsId: lsId, lsStudy: lsStudy, testing: testing, uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, iproovFailReason: iproovFailReason, iProovThirdAttempt: iProovThirdAttempt, pyiSecondAttempt: pyiSecondAttempt }, function(err, html) {
            res.send(html)
        })
    })

    
}
