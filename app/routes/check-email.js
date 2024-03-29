// notify integration
let apiKey = 'cidprototype-96856a46-bebf-4032-881a-d7b35262e5c8-8433d391-d07a-484d-86b0-0406a2203a01'
let templateId = 'b54b3862-3aef-4237-9b5d-358f43ec95c0'
let templateIdMVP = '9abb61db-3232-4ba8-95cd-2f91b66855ec'
let templateIdPreview = '9d65f5f2-81e6-4dea-9a62-4e021dddd12a'
let templateIdDelegated = '0c3677d8-2146-4cd3-9123-4c3e667d401e'
const NotifyClient = require('notifications-node-client').NotifyClient, notifyClient = new NotifyClient(apiKey)

module.exports = function (router) {
  router.get('/create-account/check-email', function (req, res) {
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
    // send email message
    var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + "&poluser=" + poluser
    var personalisation = {
        'email_address': emailAddress,
        'params': params
    }
    if (emailAddress !== '' || emailAddress !== 'undefined') {
        notifyClient
            .sendEmail(templateId, emailAddress, {
                personalisation: personalisation
            })
            .then(response => console.log(response)
            ).catch(err => console.error(err))
    }
    // re-render the page along with the parameter
    res.render('create-account/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/create-account/v22/check-email', function (req, res) {
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
    var manual = req.param('manual')
    // send email message
    var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&manual=' + manual
    var personalisation = {
        'email_address': emailAddress,
        'params': params
    }
    if (emailAddress !== '' || emailAddress !== 'undefined') {
        notifyClient
            .sendEmail(templateIdDelegated, emailAddress, {
                personalisation: personalisation
            })
            .then(response => console.log(response)
            ).catch(err => console.error(err))
    }
    // re-render the page along with the parameter
    res.render('create-account/v22/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, manual: manual }, function(err, html) {
        res.send(html)
    })
})

    router.get('/create-account/v21/check-email', function (req, res) {
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
        var manual = req.param('manual')
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&manual=' + manual
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateIdDelegated, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
                ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v21/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v20/check-email', function (req, res) {
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
        var manual = req.param('manual')
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&manual=' + manual
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateIdDelegated, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
                ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v20/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v19/check-email', function (req, res) {
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
        var manual = req.param('manual')
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&manual=' + manual
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateIdDelegated, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
        ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v19/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, manual: manual }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v18/check-email', function (req, res) {
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
                .sendEmail(templateIdDelegated, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
        ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v18/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v17/check-email', function (req, res) {
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
        res.render('create-account/v17/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v16/check-email', function (req, res) {
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
        res.render('create-account/v16/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v15/check-email', function (req, res) {
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
        res.render('create-account/v15/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v14/check-email', function (req, res) {
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
        res.render('create-account/v14/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v13/check-email', function (req, res) {
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
        res.render('create-account/v13/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v12/check-email', function (req, res) {
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
        res.render('create-account/v12/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })


    router.get('/create-account/v11/check-email', function (req, res) {
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
        res.render('create-account/v11/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v10/check-email', function (req, res) {
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
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy
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
        res.render('create-account/v10/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/pb/check-email', function (req, res) {
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
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + "&poluser=" + poluser
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
        res.render('create-account/pb/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/demo/check-email', function (req, res) {
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
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + "&poluser=" + poluser
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
        res.render('create-account/demo/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, devMode: devMode, returnUrl: returnUrl, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v9/check-email', function (req, res) {
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
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + "&poluser=" + poluser
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
        res.render('create-account/v9/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v8/check-email', function (req, res) {
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
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + "&poluser=" + poluser
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
        res.render('create-account/v8/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/mvp/check-email', function (req, res) {
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
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead + "&poluser=" + poluser
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateIdPreview, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
        ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/mvp/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/grant-access/check-email', function (req, res) {
        // pull in the url parameters
        /*
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')

        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateId, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
        ).catch(err => console.error(err))
        }
        */
        // re-render the page along with the parameter
        console.log('is this even working?!?!?');

        res.render('create-account/grant-access/check-email', {}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v7/check-email', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
    
        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateId, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
                ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v7/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
          res.send(html)
        })
      })

    router.get('/create-account/v7/grant-access/check-email', function (req, res) {
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')

        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateId, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
                ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v7/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v6/grant-access/check-email', function (req, res) {
        console.log('is this even working?!?!?');
        res.render('create-account/v6/grant-access/check-email', {}, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v6/check-email', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')

        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateId, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
        ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v6/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/create-account/v5/check-email', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')

        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateId, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
        ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v5/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v4/check-email', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')

        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateId, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
        ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v4/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v3/check-email', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')

        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateId, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
        ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v3/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v2/check-email', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')

        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason
        var personalisation = {
            'email_address': emailAddress,
            'params': params
        }
        if (emailAddress !== '' || emailAddress !== 'undefined') {
            notifyClient
                .sendEmail(templateId, emailAddress, {
                    personalisation: personalisation
                })
                .then(response => console.log(response)
        ).catch(err => console.error(err))
        }
        // re-render the page along with the parameter
        res.render('create-account/v2/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
}
