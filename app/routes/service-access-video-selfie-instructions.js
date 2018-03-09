module.exports = function (router) {
    router.get('/service-access/service-access-video-selfie-instructions', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        var pinCode = Math.floor(1000 + Math.random() * 9000)
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/service-access-video-selfie-instructions', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, changetomobile: changetomobile, mobile: isMobile, pinCode: pinCode }, function(err, html) {
            res.send(html)
        })
    })
}
