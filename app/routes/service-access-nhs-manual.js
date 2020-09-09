module.exports = function (router) {

    router.get('/service-access/v22/service-access-nhs-manual', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var loggedin = req.param('loggedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var idType = req.param('idType')
        var iproovPass = req.param('iproovPass')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.source
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v22/service-access-nhs-manual', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, loggedin: loggedin, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, idType: idType, iproovPass: iproovPass, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v21/service-access-nhs-manual', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var loggedin = req.param('loggedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var idType = req.param('idType')
        var iproovPass = req.param('iproovPass')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.source
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v21/service-access-nhs-manual', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, loggedin: loggedin, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, idType: idType, iproovPass: iproovPass, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v20/service-access-nhs-manual', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var loggedin = req.param('loggedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var idType = req.param('idType')
        var iproovPass = req.param('iproovPass')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.source
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v20/service-access-nhs-manual', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, loggedin: loggedin, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, idType: idType, iproovPass: iproovPass, manual: manual }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v19/service-access-nhs-manual', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var loggedin = req.param('loggedin')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var idType = req.param('idType')
        var iproovPass = req.param('iproovPass')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.source
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v19/service-access-nhs-manual', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, loggedin: loggedin, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, idType: idType, iproovPass: iproovPass, manual: manual }, function(err, html) {
            res.send(html)
        })
    })
}