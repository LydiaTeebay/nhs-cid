module.exports = function (router) {

    router.get('/service-access/v24/service-access-photo-id-passport', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var upload = req.param('upload')
        var manual = req.param('manual')

        // re-render the page along with the parameter
        res.render('service-access/v24/service-access-photo-id-passport', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, upload: upload, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v23/service-access-photo-id-passport', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var upload = req.param('upload')
        var manual = req.param('manual')

        // re-render the page along with the parameter
        res.render('service-access/v23/service-access-photo-id-passport', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, upload: upload, manual: manual }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v22/service-access-photo-id-passport', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var upload = req.param('upload')
        var manual = req.param('manual')

        // re-render the page along with the parameter
        res.render('service-access/v22/service-access-photo-id-passport', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, upload: upload, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v20/service-access-photo-id-passport', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var upload = req.param('upload')
        var manual = req.param('manual')

        // re-render the page along with the parameter
        res.render('service-access/v20/service-access-photo-id-passport', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, upload: upload, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v19/service-access-photo-id-passport', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var upload = req.param('upload')
        var manual = req.param('manual')

        // re-render the page along with the parameter
        res.render('service-access/v19/service-access-photo-id-passport', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, upload: upload, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v18/service-access-photo-id-passport', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var upload = req.param('upload')

        // re-render the page along with the parameter
        res.render('service-access/v18/service-access-photo-id-passport', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, upload: upload }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v17/service-access-photo-id-passport', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var upload = req.param('upload')

        // re-render the page along with the parameter
        res.render('service-access/v17/service-access-photo-id-passport', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, upload: upload }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v16/service-access-photo-id-passport', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var upload = req.param('upload')

        // re-render the page along with the parameter
        res.render('service-access/v16/service-access-photo-id-passport', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, upload: upload }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v15/service-access-photo-id-passport', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer

        // re-render the page along with the parameter
        res.render('service-access/v15/service-access-photo-id-passport', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl  }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/pb/service-access-photo-id-passport', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        var upload = req.param('upload')

        // re-render the page along with the parameter
        res.render('service-access/pb/service-access-photo-id-passport', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, upload: upload }, function(err, html) {
            res.send(html)
        })
    })
}
