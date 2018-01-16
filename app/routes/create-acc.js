module.exports = function (router) {
  router.get('/create-account/create-acc', function (req, res) {
    // pull in the url parameters
    var vouched = req.param('vouch')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    if (vouched === 'yes') {
          res.redirect('/create-account/two-step-code?vouch=yes')
          return
      }
    // re-render the page along with the parameter
    res.render('create-account/create-acc', {vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
      res.send(html)
    })
  })
    router.get('/create-account/v5/create-acc', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        if (vouched === 'yes') {
            res.redirect('/create-account/v5/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v5/create-acc', {vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v4/create-acc', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        if (vouched === 'yes') {
            res.redirect('/create-account/v4/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v4/create-acc', {vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v3/create-acc', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        if (vouched === 'yes') {
            res.redirect('/create-account/v3/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v3/create-acc', {vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
    router.get('/create-account/v2/create-acc', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        if (vouched === 'yes') {
            res.redirect('/create-account/v2/two-step-code?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v2/create-acc', {vouch: vouched, service: service, serviceName: serviceName}, function(err, html) {
            res.send(html)
        })
    })
}