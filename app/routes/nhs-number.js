module.exports = function (router) {
    router.get('/service-access/nhs-number', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('service-access/nhs-number', { service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
}