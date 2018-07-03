module.exports = function (router) {
  router.get('/create-account/two-step', function (req, res) {
    // pull in the url parameters
    var theReason = req.param('reason')
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    var terms = req.param('terms')
    var emailAddress = req.param('emailAddress')
    var hidehead = req.param('hidehead')
    var poluser = req.param('poluser')
    // re-render the page along with the parameter
    res.render('create-account/two-step', { reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser }, function(err, html) {
      res.send(html)
    })
  })
    router.post('/create-account/two-step', function (req, res) {
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.redirect('/create-account/two-step-code-pincode?terms=yes&vouch=' + vouched + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/pb/two-step', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/pb/two-step', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/pb/two-step', function (req, res) {
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.redirect('/create-account/pb/two-step-code-pincode?terms=yes&vouch=' + vouched + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/v9/two-step', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/v9/two-step', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v9/two-step', function (req, res) {
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.redirect('/create-account/v9/two-step-code-pincode?terms=yes&vouch=' + vouched + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/v8/two-step', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/v8/two-step', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v8/two-step', function (req, res) {
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.redirect('/create-account/v8/two-step-code-pincode?terms=yes&vouch=' + vouched + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/mvp/two-step', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter
        res.render('create-account/mvp/two-step', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, hidehead: hidehead, poluser: poluser }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/mvp/two-step', function (req, res) {
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        res.redirect('/create-account/mvp/two-step-code-pincode?terms=yes&vouch=' + vouched + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead + "&poluser=" + poluser)
    })

    router.get('/create-account/v7/two-step', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')        
        // re-render the page along with the parameter
        res.render('create-account/v7/two-step', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress, hidehead: hidehead }, function(err, html) {
          res.send(html)
        })
      })
        router.post('/create-account/v7/two-step', function (req, res) {
            console.log("post")
            var emailAddress = req.param('emailAddress')
            var mobileNum = req.body.mobileNum
            var service = req.param('service')
            var serviceName = req.param('serviceName')
            var vouched = req.param('vouch')
            var hidehead =req.param('hidehead')
            res.redirect('/create-account/v7/two-step-code-pincode?terms=yes&vouch=' + vouched + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&hidehead=" + hidehead)
        })

    router.get('/create-account/v6/two-step', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('create-account/v6/two-step', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v6/two-step', function (req, res) {
        console.log("post")
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        res.redirect('/create-account/v6/two-step-code-pincode?terms=yes&vouch=' + vouched + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })

    router.get('/create-account/v5/two-step', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('create-account/v5/two-step', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName, terms: terms, emailAddress: emailAddress }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v5/two-step', function (req, res) {
        console.log("post")
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        res.redirect('/create-account/v5/two-step-code-pincode?terms=yes&vouch=' + vouched + '&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })

    router.get('/create-account/v4/two-step', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v4/two-step', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v3/two-step', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v3/two-step', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v2/two-step', function (req, res) {
        // pull in the url parameters
        var theReason = req.param('reason')
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v2/two-step', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
}