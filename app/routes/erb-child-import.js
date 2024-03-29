require('dotenv').config()

module.exports = function (router) {
    router.get('/eRedbook/erb-child-import', function (req, res) {
        // pull in the url parameters
        var child1name = process.env.CHILD1_NAME
        var child1age = process.env.CHILD1_AGE
        var child2name = process.env.CHILD2_NAME
        var child2age = process.env.CHILD2_AGE
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var verified = req.param('verified')
        // re-render the page along with the parameter
        res.render('eRedbook/erb-child-import', { service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, verified: verified, child1name: child1name, child1age: child1age, child2name: child2name, child2age: child2age }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/eRedbook/v1/erb-child-import', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('eRedbook/v1/erb-child-import', { service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
}
