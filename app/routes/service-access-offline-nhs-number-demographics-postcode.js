module.exports = function (router) {

    router.get('/service-access/v22/service-access-offline-nhs-number-demographics-postcode', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v22/service-access-offline-nhs-number-demographics-postcode', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, idType: idType, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v14/service-access-offline-nhs-number-demographics-postcode', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v14/service-access-offline-nhs-number-demographics-postcode', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, idType: idType, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/demo/service-access-offline-nhs-number-demographics-postcode', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/demo/service-access-offline-nhs-number-demographics-postcode', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, idType: idType, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v13/service-access-offline-nhs-number-demographics-postcode', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v13/service-access-offline-nhs-number-demographics-postcode', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, idType: idType, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/v13/service-access-offline-nhs-number-demographics-postcode', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var postcode = req.param('postcode')
        // re-render the page along with the parameter
        res.redirect('/service-access/v13/service-access-offline-2?emailAddress=' + emailAddress + '&vouched=' + vouched + '&service=' + service + '&serviceName=' +  serviceName + '&mobileNum=' + mobileNum + '&formerror=' + formerror + '&hidehead=' + hidehead + '&idType=' + idType + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&postcode=' + postcode)
    })
    router.get('/service-access/v12/service-access-offline-nhs-number-demographics-postcode', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v12/service-access-offline-nhs-number-demographics-postcode', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, idType: idType, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/v12/service-access-offline-nhs-number-demographics-postcode', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var postcode = req.param('postcode')
        // re-render the page along with the parameter
        res.redirect('/service-access/v12/service-access-offline-2?emailAddress=' + emailAddress + '&vouched=' + vouched + '&service=' + service + '&serviceName=' +  serviceName + '&mobileNum=' + mobileNum + '&formerror=' + formerror + '&hidehead=' + hidehead + '&idType=' + idType + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&postcode=' + postcode)
    })
    router.get('/service-access/v11/service-access-offline-nhs-number-demographics-postcode', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v11/service-access-offline-nhs-number-demographics-postcode', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, idType: idType, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/v11/service-access-offline-nhs-number-demographics-postcode', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var postcode = req.param('postcode')
        // re-render the page along with the parameter
        
        res.redirect('/service-access/v11/service-access-offline-2?emailAddress=' + emailAddress + '&vouched=' + vouched + '&service=' + service + '&serviceName=' +  serviceName + '&mobileNum=' + mobileNum + '&formerror=' + formerror + '&hidehead=' + hidehead + '&idType=' + idType + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&postcode=' + postcode)

        //res.render('service-access/v11/service-access-offline-nhs-number-demographics-postcode', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, idType: idType, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, postcode: postcode }, function(err, html) {
        //    res.send(html)
        //})
    })

    router.get('/service-access/pb/service-access-offline-nhs-number-demographics-postcode', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var idType = req.param('idType')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/pb/service-access-offline-nhs-number-demographics-postcode', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, idType: idType, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })
    })
}