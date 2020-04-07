module.exports = function (router) {
    router.get('/service-access/service-access-photo-id-type', function (req, res) {
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
        // re-render the page along with the parameter

        res.render('service-access/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })

        // redirect if can't do the video recording
        // if (isMobile) {
        //     res.render('service-access/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, hidehead: hidehead, challenge: challenge }, function(err, html) {
        //         res.send(html)
        //     })
        //     return
        // } else {
        //     res.render('service-access/service-access-switchtomobile', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, hidehead: hidehead, challenge: challenge, changetomobile: changetomobile }, function(err, html) {
        //         res.send(html)
        //     })
        //     return
        // }
    })
    router.post('/service-access/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var isMobile = req.useragent.isMobile
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')

        if (idType === 'driving licence') {
            // var formerror = 'invalid'
        }
        if (idType === 'passport') {
            // var formerror = 'undefined'
        }

        if (idType === 'passport' || idType === 'driving licence') {

            res.redirect('/service-access/service-access-photo-id-instructions?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge )
            // return
            // if (isMobile) {
            //     res.redirect('/service-access/service-access-photo-id-instructions?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge )
            //     return
            // } else {
            //     res.redirect('/service-access/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge)
            //     return
            // }
        } else {
            res.redirect('/service-access/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge)
        }

    })

    router.get('/service-access/v21/service-access-photo-id-type', function (req, res) {
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
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        var linkback = req.param('linkback')
        var manual = req.param('manual')
        // re-render the page along with the parameter

        if (iproov === 'false') {
            res.redirect('/service-access/v21/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk + '&linkback=' + linkback + '&manual=' + manual )
        }

        else if (desk === 'true') {
            res.redirect('/service-access/v21/service-access-switchtomobile-desktop?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk + '&linkback=' + linkback + '&manual=' + manual)
        }

        else {
            res.render('service-access/v21/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile, iproov: iproov, desk: desk, linkback: linkback, manual: manual }, function(err, html) {
                res.send(html)
            })
        }
    })

    router.post('/service-access/v21/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' || idType === 'UK driving licence' || idType === 'European driving licence' || idType === 'European national identity card' ) {
            res.redirect('/service-access/v21/service-access-photo-id-instructions?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual  + '&side=' + side)
        }

        else {
            res.redirect('/service-access/v21/service-access-offline-triage?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual + '&side=' + side)
        }
    })

    router.get('/service-access/v20/service-access-photo-id-type', function (req, res) {
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
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        var linkback = req.param('linkback')
        var manual = req.param('manual')
        // re-render the page along with the parameter

        if (iproov === 'false') {
            res.redirect('/service-access/v20/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk + '&linkback=' + linkback + '&manual=' + manual )
        }

        else if (desk === 'true') {
            res.redirect('/service-access/v20/service-access-switchtomobile-desktop?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk + '&linkback=' + linkback + '&manual=' + manual)
        }

        else {
            res.render('service-access/v20/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile, iproov: iproov, desk: desk, linkback: linkback, manual: manual }, function(err, html) {
                res.send(html)
            })
        }
    })

    router.post('/service-access/v20/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' || idType === 'UK driving licence' || idType === 'European driving licence' || idType === 'European national identity card' ) {
            res.redirect('/service-access/v20/service-access-photo-id-instructions?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual  + '&side=' + side)
        }

        else {
            res.redirect('/service-access/v20/service-access-offline-triage?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual + '&side=' + side)
        }
    })

    router.get('/service-access/v19/service-access-photo-id-type', function (req, res) {
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
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        var linkback = req.param('linkback')
        var manual = req.param('manual')
        // re-render the page along with the parameter

        if (iproov === 'false') {
            res.redirect('/service-access/v19/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk + '&linkback=' + linkback + '&manual=' + manual )
        }

        else if (desk === 'true') {
            res.redirect('/service-access/v19/service-access-switchtomobile-desktop?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk + '&linkback=' + linkback + '&manual=' + manual)
        }

        else {
            res.render('service-access/v19/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile, iproov: iproov, desk: desk, linkback: linkback, manual: manual }, function(err, html) {
                res.send(html)
            })
        }
    })

    router.post('/service-access/v19/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' || idType === 'UK driving licence' || idType === 'European driving licence' || idType === 'European national identity card' ) {
            res.redirect('/service-access/v19/service-access-photo-id-instructions?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual )
        }

        else {
            res.redirect('/service-access/v19/service-access-offline-triage?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual)
        }
    })

    router.get('/service-access/v18/service-access-photo-id-type', function (req, res) {
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
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        // re-render the page along with the parameter

        if (iproov === 'false') {
            res.redirect('/service-access/v18/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk )
        }

        else if (desk === 'true') {
            res.redirect('/service-access/v18/service-access-switchtomobile-desktop?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk )
        }

        else {
            res.render('service-access/v18/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile, iproov: iproov, desk: desk }, function(err, html) {
                res.send(html)
            })
        }
    })

    router.post('/service-access/v18/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' || idType === 'UK driving licence' || idType === 'European driving licence' || idType === 'European national identity card' ) {
            res.redirect('/service-access/v18/service-access-photo-id-instructions?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }

        else {
            res.redirect('/service-access/v18/service-access-offline-triage?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }
    })

    router.get('/service-access/v17/service-access-photo-id-type', function (req, res) {
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
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        // re-render the page along with the parameter

        if (iproov === 'false') {
            res.redirect('/service-access/v17/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk )
        }

        else if (desk === 'true') {
            res.redirect('/service-access/v17/service-access-switchtomobile-desktop?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk )
        }

        else {
            res.render('service-access/v17/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile, iproov: iproov, desk: desk }, function(err, html) {
                res.send(html)
            })
        }
    })

    router.post('/service-access/v17/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' || idType === 'UK driving licence' || idType === 'European driving licence' || idType === 'European national identity card' ) {
            res.redirect('/service-access/v17/service-access-photo-id-instructions?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }

        else {
            res.redirect('/service-access/v17/service-access-offline-triage?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }
    })

    router.get('/service-access/v16/service-access-photo-id-type', function (req, res) {
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
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        // re-render the page along with the parameter

        if (iproov === 'false') {
            res.redirect('/service-access/v16/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk )
        }

        else if (desk === 'true') {
            res.redirect('/service-access/v16/service-access-switchtomobile-desktop?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk )
        }

        else {
            res.render('service-access/v16/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile, iproov: iproov, desk: desk }, function(err, html) {
                res.send(html)
            })
        }
    })

    router.post('/service-access/v16/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' || idType === 'UK driving licence' || idType === 'European driving licence' || idType === 'European national identity card' ) {
            res.redirect('/service-access/v16/service-access-photo-id-instructions?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }

        else {
            res.redirect('/service-access/v16/service-access-offline-triage?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }
    })


    router.get('/service-access/v15/service-access-photo-id-type', function (req, res) {
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
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        // re-render the page along with the parameter

        if (iproov === 'false') {
            res.redirect('/service-access/v15/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk )
        }

        else if (desk === 'true') {
            res.redirect('/service-access/v15/service-access-switchtomobile-desktop?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk )
        }

        else {
            res.render('service-access/v15/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile, iproov: iproov, desk: desk }, function(err, html) {
                res.send(html)
            })
        }
    })

    router.post('/service-access/v15/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' ) {
            res.redirect('/service-access/v15/service-access-photo-id-passport?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        } 

        else if (idType === 'UK driving licence' || idType === 'European driving licence' || idType === 'European national identity card') {
            res.redirect('/service-access/v15/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        } 

        else {
            res.redirect('/service-access/v15/service-access-offline?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }
    })






    router.get('/service-access/v14/service-access-photo-id-type', function (req, res) {
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
        res.render('service-access/v14/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/v14/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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

        res.redirect('/service-access/v14/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )

    })






    router.get('/service-access/demo/service-access-photo-id-type', function (req, res) {
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
        res.render('service-access/demo/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/demo/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' || idType === 'driving licence') {
            res.redirect('/service-access/demo/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        } else {
            res.redirect('/service-access/demo/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }
    })






    router.get('/service-access/v13/service-access-photo-id-type', function (req, res) {
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
        res.render('service-access/v13/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/v13/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' || idType === 'driving licence') {
            res.redirect('/service-access/v13/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        } else {
            res.redirect('/service-access/v13/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }
    })

    router.get('/service-access/v12/service-access-photo-id-type', function (req, res) {
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
        res.render('service-access/v12/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/v12/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' || idType === 'driving licence') {
            res.redirect('/service-access/v12/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        } else {
            res.redirect('/service-access/v12/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }
    })

    router.get('/service-access/v12/service-access-photo-id-type', function (req, res) {
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
        res.render('service-access/v12/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/v12/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' || idType === 'driving licence') {
            res.redirect('/service-access/v12/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        } else {
            res.redirect('/service-access/v12/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }
    })

    router.get('/service-access/v11/service-access-photo-id-type', function (req, res) {
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
        res.render('service-access/v11/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/v11/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' || idType === 'driving licence') {
            res.redirect('/service-access/v11/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        } else {
            res.redirect('/service-access/v11/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }
    })

    router.get('/service-access/v10/service-access-photo-id-type', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('service-access/v10/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, isMobile: isMobile, changetomobile: changetomobile }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/v10/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')

        if (idType === 'passport' || idType === 'driving licence') {
            res.redirect('/service-access/v10/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy )
        } else {
            res.redirect('/service-access/v10/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy )
        }
    })

    router.get('/service-access/pb/service-access-photo-id-type', function (req, res) {
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
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        // re-render the page along with the parameter

        if (iproov === 'false') {
            res.redirect('/service-access/pb/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk )
        }

        else if (desk === 'true') {
            res.redirect('/service-access/pb/service-access-switchtomobile-desktop?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk )
        }

        else {
            res.render('service-access/pb/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile, iproov: iproov, desk: desk }, function(err, html) {
                res.send(html)
            })
        }
    })

    router.post('/service-access/pb/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
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
        if (idType === 'passport' ) {
            res.redirect('/service-access/pb/service-access-photo-id-passport?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }

        else if (idType === 'UK driving licence' || idType === 'European driving licence' || idType === 'European national identity card') {
            res.redirect('/service-access/pb/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }

        else {
            res.redirect('/service-access/pb/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile )
        }
    })

    router.get('/service-access/v9/service-access-photo-id-type', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('service-access/v9/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/v9/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var isMobile = req.useragent.isMobile
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')

        if (idType === 'driving licence') {
            // var formerror = 'invalid'
        }
        if (idType === 'passport') {
            // var formerror = 'undefined'
        }
        if (idType === 'passport' || idType === 'driving licence') {
            res.redirect('/service-access/v9/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge )
        } else {
            res.redirect('/service-access/v9/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge)
        }
    })

    router.get('/service-access/v8/service-access-photo-id-type', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('service-access/v8/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/v8/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var isMobile = req.useragent.isMobile
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')

        if (idType === 'driving licence') {
            // var formerror = 'invalid'
        }
        if (idType === 'passport') {
            // var formerror = 'undefined'
        }
        if (idType === 'passport' || idType === 'driving licence') {
            res.redirect('/service-access/v8/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge )
        } else {
            res.redirect('/service-access/v8/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge)
        }
    })

    router.get('/service-access/mvp/service-access-photo-id-type', function (req, res) {
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
        // re-render the page along with the parameter
        res.render('service-access/mvp/service-access-photo-id-type', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, hidehead: hidehead, challenge: challenge }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/mvp/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var isMobile = req.useragent.isMobile
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')

        if (idType === 'driving licence') {
            // var formerror = 'invalid'
        }
        if (idType === 'passport') {
            // var formerror = 'undefined'
        }
        if (idType === 'passport' || idType === 'driving licence') {
            res.redirect('/service-access/mvp/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge )
        } else {
            res.redirect('/service-access/mvp/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge)
        }
    })

    router.get('/service-access/v4/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/v4/service-access-photo-id-type', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/v4/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var isMobile = req.useragent.isMobile
        var hidehead = req.param('hidehead')

        if (idType === 'driving licence') {
            // var formerror = 'invalid'
        }
        if (idType === 'passport') {
            var formerror = 'undefined'
        }

        if (idType === 'passport' || idType === 'driving licence') {
            if (isMobile) {
                res.redirect('/service-access/v4/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror + '&hidehead=' + hidehead)
                return
            } else {
                res.redirect('/service-access/v4/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror + '&hidehead=' + hidehead)
                return
            }
        }
        res.redirect('/service-access/v4/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror + '&hidehead=' + hidehead)
    })

    router.get('/service-access/v3/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        // re-render the page along with the parameter
        res.render('service-access/v3/service-access-photo-id-type', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/v3/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var isMobile = req.useragent.isMobile

        if (idType === 'passport' || idType === 'driving licence') {
            if (isMobile) {
                res.redirect('/service-access/v3/service-access-photo-id-camera?emailAddress=' + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType)
                return
            } else {
                res.redirect('/service-access/v3/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType)
                return
            }
        }
        res.redirect('/service-access/v3/service-access-offline?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType)
    })
}