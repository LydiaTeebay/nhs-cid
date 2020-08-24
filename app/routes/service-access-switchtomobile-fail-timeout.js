// notify integration
let apiKey = 'cidprototype-96856a46-bebf-4032-881a-d7b35262e5c8-8433d391-d07a-484d-86b0-0406a2203a01'
let templateId = '5414106b-6032-4fa2-ae19-50331bdf0791'
let templateIdMVP = '17a60c8d-75da-4ae0-9925-5e661e7ebd5a'
let smsSender = '8e63067f-0698-45d5-ac59-946c2089c058'
const NotifyClient = require('notifications-node-client').NotifyClient, notifyClient = new NotifyClient(apiKey)

module.exports = function (router) {

    router.get('/service-access/v22/service-access-switchtomobile-fail-timeout', function (req, res) {
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
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        // re-render the page along with the parameter

        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateIdMVP, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
                .catch(err => console.error(err))
        }

        res.render('service-access/v22/service-access-switchtomobile-fail-timeout', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, iproov: iproov, desk: desk }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v21/service-access-switchtomobile-fail-timeout', function (req, res) {
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
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        // re-render the page along with the parameter

        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateIdMVP, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
                .catch(err => console.error(err))
        }

        res.render('service-access/v21/service-access-switchtomobile-fail-timeout', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, iproov: iproov, desk: desk }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v20/service-access-switchtomobile-fail-timeout', function (req, res) {
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
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        // re-render the page along with the parameter

        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateIdMVP, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
                .catch(err => console.error(err))
        }

        res.render('service-access/v20/service-access-switchtomobile-fail-timeout', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, iproov: iproov, desk: desk }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v19/service-access-switchtomobile-fail-timeout', function (req, res) {
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
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        // re-render the page along with the parameter

        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateIdMVP, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
        .catch(err => console.error(err))
        }

        res.render('service-access/v19/service-access-switchtomobile-fail-timeout', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, iproov: iproov, desk: desk }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v18/service-access-switchtomobile-fail-timeout', function (req, res) {
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
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        // re-render the page along with the parameter

        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateIdMVP, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
        .catch(err => console.error(err))
        }

        res.render('service-access/v18/service-access-switchtomobile-fail-timeout', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, iproov: iproov, desk: desk }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/service-access/v17/service-access-switchtomobile-fail-timeout', function (req, res) {
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
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        // re-render the page along with the parameter

        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateIdMVP, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
        .catch(err => console.error(err))
        }

        res.render('service-access/v17/service-access-switchtomobile-fail-timeout', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, iproov: iproov, desk: desk }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v16/service-access-switchtomobile-fail-timeout', function (req, res) {
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
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        // re-render the page along with the parameter

        if (changetomobile === 'yes') {
            // console.log("sending text")
            notifyClient
                .sendSms(templateIdMVP, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
        .catch(err => console.error(err))
        }

        res.render('service-access/v16/service-access-switchtomobile-fail-timeout', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, isMobile: isMobile, changetomobile: changetomobile, hidehead: hidehead, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl, iproov: iproov, desk: desk }, function(err, html) {
            res.send(html)
        })
    })

}
