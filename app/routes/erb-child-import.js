module.exports = function (router) {
    router.get('/eRedbook/erb-child-import', function (req, res) {
        // pull in the url parameters
        console.log("HHDSDSAHDAS")
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('eRedbook/erb-child-import', { service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
}