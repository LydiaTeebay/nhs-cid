module.exports = function (router) {
    router.get('/service-access/service-access-video-selfie-camera', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/service-access-video-selfie-camera', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, changetomobile: changetomobile, mobile: isMobile }, function(err, html) {
            res.send(html)
        })
    })
}
