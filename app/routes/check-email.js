// notify integration
let apiKey = 'cidprototype-96856a46-bebf-4032-881a-d7b35262e5c8-8433d391-d07a-484d-86b0-0406a2203a01'
let templateId = 'b54b3862-3aef-4237-9b5d-358f43ec95c0'
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

    // send email message
    var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead
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
    res.render('create-account/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead }, function(err, html) {
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

        // send email message
        var params = '?service=' + service + '&serviceName=' + '&vouch=' + vouched + '&terms=' + terms + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&reason=' + theReason + '&hidehead=' + hidehead
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
        res.render('create-account/mvp/check-email', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead }, function(err, html) {
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
