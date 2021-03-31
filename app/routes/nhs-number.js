const { check, validationResult } = require('express-validator/check')
const { matchedData, sanitize } = require('express-validator/filter')

module.exports = function (router) {
    router.get('/service-access/v2/nhs-number', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('service-access/v2/nhs-number', { service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
    
    // service-access-nhs-number-automated
    router.post('/service-access/v23/service-access-nhs-number-automated', function (req, res) {
        // pull in the url parameters
        var uplift = req.param('uplift')
        var emailAddress = req.param('emailAddress')
        var mobileNum = req.param('mobileNum')
        var idType = req.body.idType
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var isMobile = req.useragent.isMobile
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        var challenge = req.param('challenge')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var iproov = req.param('iproov')
        var desk = req.param('desk')
        var manual = req.param('manual')
        var side = 'front'
        if (idType === 'yes' ) {
            res.redirect('/service-access/v23/service-access-nhs-number-demographics-dob=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual  + '&side=' + side + '&uplift=' + uplift)
        }

        else {
            res.redirect('/service-access/v23/service-access-nhs-number-demographics-name' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&idType=' + idType + '&hidehead=' + hidehead + '&challenge=' + challenge + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&formerror=' + formerror + '&isMobile=' + isMobile + '&manual=' + manual + '&side=' + side + '&uplift=' + uplift)
        }
    })

    router.post('/service-access/v2/nhs-number', function (req, res) {
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

    router.get('/service-access/v1/nhs-number', function (req, res) {
        // pull in the url parameters
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        // re-render the page along with the parameter
        res.render('service-access/v1/nhs-number', { service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum }, function(err, html) {
            res.send(html)
        })
    })
}