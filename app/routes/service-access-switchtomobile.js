module.exports = function (router) {
    router.get('/service-access/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var hidehead = req.param('hidehead')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/service-access-switchtomobile', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.body.mob_number
        var emailAddress = req.param('emailAddress')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile

        if (mobileNum === '' || mobileNum === 'undefined') {
            var formerror = 'invalid'
        }
        // re-render the page along with the parameter
        res.redirect('/service-access/service-access-switchtomobile-waiting?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror + '&changetomobile=' + changetomobile)
    })

    router.get('/service-access/v10/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var hidehead = req.param('hidehead')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/v10/service-access-switchtomobile', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/v10/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.body.mob_number
        var emailAddress = req.param('emailAddress')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile

        if (mobileNum === '' || mobileNum === 'undefined') {
            var formerror = 'invalid'
        }
        // re-render the page along with the parameter
        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateId, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
        .catch(err => console.error(err))
        }
        res.redirect('/service-access/v10/service-access-switchtomobile-waiting?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror)
    })

    router.get('/service-access/pb/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var hidehead = req.param('hidehead')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/pb/service-access-switchtomobile', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/pb/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.body.mob_number
        var emailAddress = req.param('emailAddress')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile

        if (mobileNum === '' || mobileNum === 'undefined') {
            var formerror = 'invalid'
        }
        // re-render the page along with the parameter
        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateId, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
        .catch(err => console.error(err))
        }
        res.redirect('/service-access/pb/service-access-switchtomobile-waiting?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror)
    })

    router.get('/service-access/v9/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var hidehead = req.param('hidehead')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/v9/service-access-switchtomobile', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/v9/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.body.mob_number
        var emailAddress = req.param('emailAddress')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile

        if (mobileNum === '' || mobileNum === 'undefined') {
            var formerror = 'invalid'
        }
        // re-render the page along with the parameter
        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateId, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
        .catch(err => console.error(err))
        }
        res.redirect('/service-access/v9/service-access-switchtomobile-waiting?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror)
    })


    router.get('/service-access/v8/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var hidehead = req.param('hidehead')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/v8/service-access-switchtomobile', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/v8/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.body.mob_number
        var emailAddress = req.param('emailAddress')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile

        if (mobileNum === '' || mobileNum === 'undefined') {
            var formerror = 'invalid'
        }
        // re-render the page along with the parameter
        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateId, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
        .catch(err => console.error(err))
        }
        res.redirect('/service-access/v8/service-access-switchtomobile-waiting?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror)
    })

    router.get('/service-access/mvp/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var hidehead = req.param('hidehead')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/mvp/service-access-switchtomobile', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/mvp/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.body.mob_number
        var emailAddress = req.param('emailAddress')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile

        if (mobileNum === '' || mobileNum === 'undefined') {
            var formerror = 'invalid'
        }
        // re-render the page along with the parameter
        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateId, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
        .catch(err => console.error(err))
        }
        res.redirect('/service-access/mvp/service-access-switchtomobile-waiting?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror)
    })

    router.get('/service-access/v4/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var hidehead = req.param('hidehead')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/v4/service-access-switchtomobile', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/v4/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.body.mob_number
        var emailAddress = req.param('emailAddress')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile

        if (mobileNum === '' || mobileNum === 'undefined') {
            var formerror = 'invalid'
        }
        // re-render the page along with the parameter
        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateId, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
        .catch(err => console.error(err))
        }
        res.redirect('/service-access/v4/service-access-switchtomobile-waiting?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror)
    })
    
    router.get('/service-access/v3/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/v3/service-access-switchtomobile', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/v3/service-access-switchtomobile', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.body.mob_number
        var emailAddress = req.param('emailAddress')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile

        if (mobileNum === '' || mobileNum === 'undefined') {
            var formerror = 'invalid'
        }
        // re-render the page along with the parameter
        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateId, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
        .catch(err => console.error(err))
        }
        res.redirect('/service-access/v3/service-access-switchtomobile-waiting?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&formerror=' + formerror)
    })
}
