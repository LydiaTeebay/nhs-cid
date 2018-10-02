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
    var verified = req.param('verified')
    var poluser = req.param('poluser')
    // re-render the page along with the parameter

    if (terms === 'yes') {
      res.redirect('/create-account/two-step?service=' + service + '&serviceName=' + serviceName + '&terms=' + terms + '&mobileNum=' + mobileNum + '&emailAddress=' + emailAddress + '&vouch=' + vouched + '&verified=' + verified + '&poluser=' + poluser)
      return
    } else {
      res.render('create-account/login-nhs', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified, poluser: poluser }, function(err, html) {
          res.send(html)
      })
    }
  })

    router.get('/create-account/v12/login-nhs', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var poluser = req.param('poluser')
        var result = req.param('result')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/v12/login-nhs', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified, poluser: poluser, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })

    })

    router.get('/create-account/v11/login-nhs', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var poluser = req.param('poluser')
        var result = req.param('result')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('create-account/v11/login-nhs', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified, poluser: poluser, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })

    })

    router.get('/create-account/v10/login-nhs', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var poluser = req.param('poluser')
        var result = req.param('result')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        // re-render the page along with the parameter
        res.render('create-account/v10/login-nhs', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified, poluser: poluser, result: result, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy }, function(err, html) {
            res.send(html)
        })

    })

    router.get('/create-account/pb/login-nhs', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var poluser = req.param('poluser')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter

        res.render('create-account/pb/login-nhs', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified, poluser: poluser, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })

    })

    router.get('/create-account/v9/login-nhs', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter

        res.render('create-account/v9/login-nhs', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified, poluser: poluser }, function(err, html) {
            res.send(html)
        })

    })

    router.get('/create-account/v8/login-nhs', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter

        res.render('create-account/v8/login-nhs', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified, poluser: poluser }, function(err, html) {
            res.send(html)
        })

    })

    router.get('/create-account/mvp/login-nhs', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        var poluser = req.param('poluser')
        // re-render the page along with the parameter

        if (terms === 'yes') {
            res.redirect('/create-account/mvp/two-step?service=' + service + '&serviceName=' + serviceName + '&terms=' + terms + '&mobileNum=' + mobileNum + '&emailAddress=' + emailAddress + '&vouch=' + vouched + '&verified=' + verified + '&poluser=' + poluser)
            return
        } else {
            res.render('create-account/mvp/login-nhs', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified, poluser: poluser }, function(err, html) {
                res.send(html)
            })
        }
    })

  router.get('/create-account/v7/login-nhs', function (req, res) {
    // pull in the url parameters
    var vouched = req.param('vouch')
    var service = req.param('service')
    var newUser = req.param('newUser')
    var serviceName = req.param('serviceName')
    var passwordChange = req.param('passwordChange')
    var terms = req.param('terms')
    var emailAddress = req.param('emailAddress')
    var mobileNum = req.param('mobileNum')
    var verified = req.param('verified')
    // re-render the page along with the parameter

    if (terms === 'yes') {
      res.redirect('/create-account/v7/two-step?service=' + service + '&serviceName=' + serviceName + '&terms=' + terms + '&mobileNum=' + mobileNum + '&emailAddress=' + emailAddress + '&vouch=' + vouched + '&verified=' + verified)
      return
    } else {
      res.render('create-account/v7/login-nhs', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified }, function(err, html) {
          res.send(html)
      })
    }
  })



    router.get('/create-account/v6/login-nhs', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var newUser = req.param('newUser')
        var serviceName = req.param('serviceName')
        var passwordChange = req.param('passwordChange')
        var terms = req.param('terms')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var verified = req.param('verified')
        // re-render the page along with the parameter

        if (terms === 'yes') {
            res.redirect('/create-account/v6/two-step?service=' + service + '&serviceName=' + serviceName + '&terms=' + terms + '&mobileNum=' + mobileNum + '&emailAddress=' + emailAddress + '&vouch=' + vouched + '&verified=' + verified)
            return
        } else {
            res.render('create-account/v6/login-nhs', { emailAddress: emailAddress, mobileNum: mobileNum, vouch: vouched, passwordChange: passwordChange, newUser: newUser, service: service, serviceName: serviceName, terms: terms, verified: verified }, function(err, html) {
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