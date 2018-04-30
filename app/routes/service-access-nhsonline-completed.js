module.exports = function (router) {
    router.get('/service-access/service-access-nhsonline-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/service-access-nhsonline-completed', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/mvp/service-access-nhsonline-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/mvp/service-access-nhsonline-completed', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v4/service-access-nhsonline-completed', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/v4/service-access-nhsonline-completed', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })
}