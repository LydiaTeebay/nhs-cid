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
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/service-access-photo-id-type', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/service-access/service-access-photo-id-type', function (req, res) {
        // pull in the url parameters
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var isMobile = req.useragent.isMobile

        if (idType === 'driving licence') {
            var formerror = 'invalid'
        }
        if (idType === 'passport') {
            var formerror = 'undefined'
        }

        if (idType === 'passport' || idType === 'driving licence') {
            if (isMobile) {
                res.redirect('/service-access/service-access-photo-id-camera?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror)
                return
            } else {
                res.redirect('/service-access/service-access-switchtomobile?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror)
                return
            }
        }
        res.redirect('/service-access/service-access-no-documents?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror)
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