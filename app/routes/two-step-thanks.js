module.exports = function (router) {
  router.get('/create-account/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v5/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v5/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v4/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v4/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v3/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/v3/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v3/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v2/two-step-thanks', function (req, res) {
        // pull in the url parameter
        var vouched = req.param('vouch')
        // vouched users bypass this page and set a password
        if (vouched === 'yes') {
            res.redirect('/create-account/v3/set-password?vouch=yes')
            return
        }
        var theReason = req.param('reason')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        // re-render the page along with the parameter
        res.render('create-account/v2/two-step-thanks', {reason: theReason, vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
}