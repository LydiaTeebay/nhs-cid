// notify integration
let apiKey = 'cidprototype-96856a46-bebf-4032-881a-d7b35262e5c8-8433d391-d07a-484d-86b0-0406a2203a01'
let templateId = 'b54b3862-3aef-4237-9b5d-358f43ec95c0'
let templateIdMVP = '9abb61db-3232-4ba8-95cd-2f91b66855ec'
let templateIdPreview = '9d65f5f2-81e6-4dea-9a62-4e021dddd12a'
const NotifyClient = require('notifications-node-client').NotifyClient, notifyClient = new NotifyClient(apiKey)

module.exports = function (router) {

    router.get('/create-account/v21/check-email-nudge', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateIdMVP, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
                ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v21/check-email-nudge', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v20/check-email-nudge', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateIdMVP, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
                ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v20/check-email-nudge', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v19/check-email-nudge', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateIdMVP, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
        ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v19/check-email-nudge', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })
}
