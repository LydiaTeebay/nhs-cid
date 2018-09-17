module.exports = function (router) {
    router.get('/service-access/v11/service-access-offline-find-place', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var isMobile = req.useragent.isMobile
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v11/service-access-offline-find-place', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, changetomobile: changetomobile }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/v11/service-access-offline-find-place', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.param('idType')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var isMobile = req.useragent.isMobile
        var place = req.body.place
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        res.redirect('/service-access/v11/service-access-offline-find-place-confirm?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&isMobile=' + isMobile + '&hidehead=' + hidehead + '&challenge=' + challenge + '&place=' + place + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl )
    })

    router.get('/service-access/pb/service-access-offline-find-place', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var isMobile = req.useragent.isMobile
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/pb/service-access-offline-find-place', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, hidehead: hidehead, challenge: challenge, devMode: devMode, returnUrl: returnUrl, changetomobile: changetomobile  }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/pb/service-access-offline-find-place', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.param('idType')
        var place = req.body.place
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var isMobile = req.useragent.isMobile
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        res.redirect('/service-access/pb/service-access-photo-offline-confirmation?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&place=' + place + '&idType=' + idType + '&isMobile=' + isMobile + '&hidehead=' + hidehead + '&challenge=' + challenge + '&devMode=' + devMode + '&returnUrl=' + returnUrl )
    })
}