module.exports = function (router) {
    router.get('/service-access/service-access-nhs-number', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/service-access-nhs-number', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/service-access-nhs-number', function (req, res) {
        // var nhs_yes = req.body.radioinlinegroup
        // var nhs_number = req.body.nhs_number
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')

        // if (nhs_yes === 'yes') {
        //     check('nhs_number').exists()
        //     check('nhs_number', 'NHS numbers must be at least 10 digits and can contain spaces').isLength({min: 10}).isNumeric()
        // }

        res.redirect('/service-access/service-access-photo-id?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&formerror=" + formerror + "&hidehead=" + hidehead )
    })

    router.get('/service-access/v4/service-access-nhs-number', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/v4/service-access-nhs-number', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v3/service-access-nhs-number', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        // re-render the page along with the parameter
        res.render('service-access/v3/service-access-nhs-number', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror }, function(err, html) {
            res.send(html)
        })
    })
}