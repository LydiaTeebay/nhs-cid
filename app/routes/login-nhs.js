module.exports = function (router) {
  router.get('/create-account/login-nhs', function (req, res) {
    // pull in the url parameters
    var vouched = req.param('vouch')
    var service = req.param('service')
    var newUser = req.param('newUser')
    var serviceName = req.param('serviceName')
    var passwordChange = req.param('passwordChange')
    var terms = req.param('terms')
    var emailAddress = req.param('emailAddress')
    var mobileNum = req.param('mobileNum')
    // re-render the page along with the parameter

    if (terms === 'yes') {
      res.redirect('/create-account/two-step?service=' + service + '&serviceName=' + serviceName + '&terms=' + terms + '&mobileNum=' + mobileNum + '&emailAddress=' + emailAddress + '&vouch=' + vouched)
      return
    } else {
      res.render('create-account/login-nhs', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms }, function(err, html) {
          res.send(html)
      })
    }
  })

    router.get('/create-account/v5/login-nhs', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        // re-render the page along with the parameter

        if (terms === 'yes') {
            res.redirect('/create-account/v5/two-step?service=' + service + '&serviceName=' + serviceName + '&terms=' + terms + '&mobileNum=' + mobileNum + '&emailAddress=' + emailAddress + '&vouch=' + vouched)
            return
        } else {
            res.render('create-account/v5/login-nhs', { vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms }, function(err, html) {
                res.send(html)
            })
        }
    })

    router.get('/create-account/v4/login-nhs', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        // re-render the page along with the parameter

        if (terms === 'yes') {
            res.redirect('/create-account/v4/two-step-code-login?service=' + service + '&serviceName=' + serviceName + '&terms=' + terms + '&mobileNum=' + mobileNum + '&emailAddress=' + emailAddress + '&vouch=' + vouched)
            return
        } else {
            res.render('create-account/v4/login-nhs', {vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms }, function(err, html) {
                res.send(html)
            })
        }
    })
    router.get('/create-account/v3/login-nhs', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        // re-render the page along with the parameter

        if (terms === 'yes') {
            res.redirect('/create-account/v3/two-step-code-login?service=' + service + '&serviceName=' + serviceName + '&terms=' + terms + '&mobileNum=' + mobileNum + '&emailAddress=' + emailAddress + '&vouch=' + vouched)
            return
        } else {
            res.render('create-account/v3/login-nhs', {vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms }, function(err, html) {
                res.send(html)
            })
        }
    })

    router.get('/create-account/v2/login-nhs', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        // re-render the page along with the parameter

        if (terms === 'yes') {
            res.redirect('/create-account/v2/two-step-code-login?service=' + service + '&serviceName=' + serviceName + '&terms=' + terms + '&mobileNum=' + mobileNum + '&emailAddress=' + emailAddress + '&vouch=' + vouched)
            return
        } else {
            res.render('create-account/v2/login-nhs', {vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms }, function(err, html) {
                res.send(html)
            })
        }
    })
}