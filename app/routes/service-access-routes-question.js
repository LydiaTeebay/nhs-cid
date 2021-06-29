module.exports = function (router) {

    router.get('/service-access/v24/service-access-routes-question', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
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
            res.redirect('/service-access/v24/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk + '&linkback=' + linkback + '&manual=' + manual + '&uplift=' + uplift )
        }

        else if (desk === 'true') {
            res.redirect('/service-access/v24/service-access-switchtomobile-desktop?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk + '&linkback=' + linkback + '&manual=' + manual + '&uplift=' + uplift)
        }

        else {
            res.render('service-access/v24/service-access-routes-question', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile, iproov: iproov, desk: desk, linkback: linkback, manual: manual }, function(err, html) {
                res.send(html)
            })
        }
    })

    router.post('/service-access/v24/service-access-routes-question', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
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
            res.redirect('/service-access/v24/service-access-photo-id-instructions?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual  + '&side=' + side + '&uplift=' + uplift)
        }

        else {
            res.redirect('/service-access/v24/service-access-offline-triage?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual + '&side=' + side + '&uplift=' + uplift)
        }
    })

}
    
    router.get('/service-access/v23/service-access-routes-question', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
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
            res.redirect('/service-access/v23/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk + '&linkback=' + linkback + '&manual=' + manual + '&uplift=' + uplift )
        }

        else if (desk === 'true') {
            res.redirect('/service-access/v23/service-access-switchtomobile-desktop?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&iproov=' + iproov + '&desk=' + desk + '&linkback=' + linkback + '&manual=' + manual + '&uplift=' + uplift)
        }

        else {
            res.render('service-access/v23/service-access-routes-question', { uplift: uplift, vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, idType: idType, hidehead: hidehead, challenge: challenge, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, isMobile: isMobile, changetomobile: changetomobile, iproov: iproov, desk: desk, linkback: linkback, manual: manual }, function(err, html) {
                res.send(html)
            })
        }
    })

    router.post('/service-access/v23/service-access-routes-question', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
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
            res.redirect('/service-access/v23/service-access-photo-id-instructions?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual  + '&side=' + side + '&uplift=' + uplift)
        }

        else {
            res.redirect('/service-access/v23/service-access-offline-triage?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual + '&side=' + side + '&uplift=' + uplift)
        }
    })

