module.exports = function (router) {

    router.get('/service-access/v24/service-access-video-selfie-say-camera-html5', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        //var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        //console.log("testing pin code");
        var challenge = req.param('challenge')
        if (challenge === "hands") {

            var pinArray = [
                '1 3 2 5',
                '4 2 3 1',
                '4 3 5 2',
                '3 2 1 5',
                '5 1 3 2',
                '4 2 3 5',
                '4 3 4 2',
                '2 4 1 3',
                '5 1 4 2',
                '3 1 4 2']

            var pinCode = pinArray[Math.floor(Math.random()*10)]

            //var pinCode1 = Math.ceil(Math.random() * 5)
            //var pinCode2 = Math.ceil(Math.random() * 5)
            //var pinCode3 = Math.ceil(Math.random() * 5)
            //var pinCode4 = Math.ceil(Math.random() * 5)
        } else {
            var pinCode1 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode2 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode3 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode4 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode = pinCode1 + ' ' + pinCode2 + ' ' + pinCode3 + ' ' + pinCode4

        }

        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')
        var hideBack = req.param('hideBack')
        var uplift = req.param('uplift')
        var testing = req.param('testing')

        // re-render the page along with the parameter
        res.render('service-access/v24/service-access-video-selfie-say-camera-html5', { testing: testing, uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, pinCode: pinCode, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, hideBack: hideBack, returnUrl: returnUrl, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v23/service-access-video-selfie-say-camera-html5', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        //var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        //console.log("testing pin code");
        var challenge = req.param('challenge')
        if (challenge === "hands") {

            var pinArray = [
                '1 3 2 5',
                '4 2 3 1',
                '4 3 5 2',
                '3 2 1 5',
                '5 1 3 2',
                '4 2 3 5',
                '4 3 4 2',
                '2 4 1 3',
                '5 1 4 2',
                '3 1 4 2']

            var pinCode = pinArray[Math.floor(Math.random()*10)]

            //var pinCode1 = Math.ceil(Math.random() * 5)
            //var pinCode2 = Math.ceil(Math.random() * 5)
            //var pinCode3 = Math.ceil(Math.random() * 5)
            //var pinCode4 = Math.ceil(Math.random() * 5)
        } else {
            var pinCode1 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode2 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode3 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode4 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode = pinCode1 + ' ' + pinCode2 + ' ' + pinCode3 + ' ' + pinCode4

        }

        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')
        var hideBack = req.param('hideBack')
        var uplift = req.param('uplift')

        // re-render the page along with the parameter
        res.render('service-access/v23/service-access-video-selfie-say-camera-html5', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, pinCode: pinCode, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, hideBack: hideBack, returnUrl: returnUrl, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v22/service-access-video-selfie-say-camera-html5', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        //var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var isMobileOs = req.useragent.platform
        var isMobileOsVer = parseFloat((req.useragent.source.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.'))
        var isMobileOsV = isMobileOsVer
        //console.log("testing pin code");
        var challenge = req.param('challenge')
        if (challenge === "hands") {

            var pinArray = [
                '1 3 2 5',
                '4 2 3 1',
                '4 3 5 2',
                '3 2 1 5',
                '5 1 3 2',
                '4 2 3 5',
                '4 3 4 2',
                '2 4 1 3',
                '5 1 4 2',
                '3 1 4 2']

            var pinCode = pinArray[Math.floor(Math.random()*10)]

            //var pinCode1 = Math.ceil(Math.random() * 5)
            //var pinCode2 = Math.ceil(Math.random() * 5)
            //var pinCode3 = Math.ceil(Math.random() * 5)
            //var pinCode4 = Math.ceil(Math.random() * 5)
        } else {
            var pinCode1 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode2 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode3 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode4 = Math.floor(0 + (9 - 0) * Math.random())
            var pinCode = pinCode1 + ' ' + pinCode2 + ' ' + pinCode3 + ' ' + pinCode4

        }

        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')
        var hideBack = req.param('hideBack')
        var uplift = req.param('uplift')

        // re-render the page along with the parameter
        res.render('service-access/v22/service-access-video-selfie-say-camera-html5', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, changetomobile: changetomobile, mobile: isMobile, mobileOs: isMobileOs, mobileOsV: isMobileOsV, pinCode: pinCode, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, hideBack: hideBack, returnUrl: returnUrl, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

}
