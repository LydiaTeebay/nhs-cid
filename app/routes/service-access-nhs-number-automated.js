module.exports = function (router) {


    router.get('/service-access/v24/service-access-nhs-number-automated', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var isMobile = req.useragent.isMobile
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        var linkback = req.param('linkback')
        var manual = req.param('manual')
        // re-render the page along with the parameter
            res.render('service-access/v24/service-access-nhs-number-automated', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile, iproov: iproov, desk: desk, linkback: linkback, manual: manual }, function(err, html) {
                res.send(html)
            })
    }) 


    router.get('/service-access/v23/service-access-nhs-number-automated', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var isMobile = req.useragent.isMobile
        var challenge = req.param('challenge')
        var hidehead = req.param('hidehead')
        var changetomobile = 'true'
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        var linkback = req.param('linkback')
        var manual = req.param('manual')
        // re-render the page along with the parameter
            res.render('service-access/v23/service-access-nhs-number-automated', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile, iproov: iproov, desk: desk, linkback: linkback, manual: manual }, function(err, html) {
                res.send(html)
            })
    }) 

    router.post('/service-access/v23/service-access-nhs-number-automated', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var emailAddress = req.param('emailAddress')
        var nhsNumber = req.body.nhsNumber
        var mobileNum = req.param('mobileNum')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var isMobile = req.useragent.isMobile
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess') 
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        var manual = req.param('manual')
        var side = 'front'
        if (nhsNumber === 'yes' ) {
            res.redirect('service-access-nhs-number-demographics-dob?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual  + '&side=' + side + '&uplift=' + uplift + '&nhsNumber=' + nhsNumber)
        } 
        
        else {
            res.redirect('service-access-nhs-number-demographics-name?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual + '&side=' + side + '&uplift=' + uplift + '&nhsNumber=' + nhsNumber)
        }
    })




    router.get('/service-access/v22/service-access-nhs-number-automated', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var idType = req.param('idType')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v22/service-access-nhs-number-automated', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, idType: idType, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v21/service-access-nhs-number-automated', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var idType = req.param('idType')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v21/service-access-nhs-number-automated', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, idType: idType, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v20/service-access-nhs-number-automated', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var idType = req.param('idType')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v20/service-access-nhs-number-automated', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, idType: idType, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v19/service-access-nhs-number-automated', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var idType = req.param('idType')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')
        // re-render the page along with the parameter
        res.render('service-access/v19/service-access-nhs-number-automated', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, idType: idType, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v18/service-access-nhs-number-automated', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var idType = req.param('idType')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v18/service-access-nhs-number-automated', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, idType: idType }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v17/service-access-nhs-number-automated', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var idType = req.param('idType')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v17/service-access-nhs-number-automated', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, idType: idType }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v16/service-access-nhs-number-automated', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var idType = req.param('idType')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v16/service-access-nhs-number-automated', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, idType: idType }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v15/service-access-nhs-number-automated', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var idType = req.param('idType')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('service-access/v15/service-access-nhs-number-automated', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, idType: idType }, function(err, html) {
            res.send(html)
        })
    })

}