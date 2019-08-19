module.exports = function (router) {
    router.get('/start/v12/helm', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('start/v12/helm', { service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })

    })
    router.get('/start/v11/helm', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('start/v11/helm', { service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })

    })
    router.get('/start/v10/helm', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('start/v10/helm', { service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })

    })
    router.get('/start/v9/helm', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('start/v9/helm', { service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })

    })
    router.get('/start/v8/helm', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        // re-render the page along with the parameter
        res.render('start/v8/helm', { service: service, serviceName: serviceName, devMode: devMode, returnUrl: returnUrl }, function(err, html) {
            res.send(html)
        })

    })

}