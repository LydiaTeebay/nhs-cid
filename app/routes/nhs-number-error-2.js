const { check, validationResult } = require('express-validator/check')
const { matchedData, sanitize } = require('express-validator/filter')

module.exports = function (router) {
    router.get('/service-access/v2/nhs-number-error-2', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('service-access/v2/nhs-number-error-2', { service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/v2/nhs-number-error-2', function (req, res) {
        console.log("post")
        var nhs_yes = req.body.radioinlinegroup
        var nhs_number = req.body.nhs_number
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')

        if (nhs_yes === 'yes') {
            check('nhs_number').exists()
            check('nhs_number', 'NHS numbers must be at least 10 digits and can contain spaces').isLength({min: 10}).isNumeric()
        }

        res.redirect('/service-access/v2/service-access-eredbook-03?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName)
    })

}