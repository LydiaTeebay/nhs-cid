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
        var nhs_yes = req.body.radioinlinegroup.val()
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        console.log(nhs_yes)
        if (nhs_yes === 'yes') {

        }

        res.redirect('/service-access/service-access-nhs-number-demographics-name?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&formerror=" + formerror + "&hidehead=" + hidehead )
    })

    router.get('/service-access/mvp/service-access-nhs-number', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        // re-render the page along with the parameter
        res.render('service-access/mvp/service-access-nhs-number', {vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.post('/service-access/mvp/service-access-nhs-number', function (req, res) {
        var nhs_yes = req.body.radioinlinegroup.val()
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var hidehead = req.param('hidehead')
        console.log(nhs_yes)
        if (nhs_yes === 'yes') {

        }

        res.redirect('/service-access/mvp/service-access-nhs-number-demographics-name?emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + "&serviceName=" + serviceName + "&formerror=" + formerror + "&hidehead=" + hidehead )
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