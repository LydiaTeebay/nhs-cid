module.exports = function (router) {
    router.get('/service-access/service-access-photo-id-camera', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        var pinCode1 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode2 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode3 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode4 = Math.floor(0 + (9 - 0) * Math.random())
        var pinCode = pinCode1 + ' ' + pinCode2 + ' ' + pinCode3 + ' ' + pinCode4
        var challenge = req.param('challenge')
        // re-render the page along with the parameter
        res.render('service-access/service-access-photo-id-camera', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, hidehead: hidehead, challenge: challenge, pinCode: pinCode }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v4/service-access-photo-id-camera', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        var hidehead = req.param('hidehead')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/v4/service-access-photo-id-camera', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile, hidehead: hidehead }, function(err, html) {
            res.send(html)
        })
    })

    router.get('/service-access/v3/service-access-photo-id-camera', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var mobileNum = req.param('mobileNum')
        var emailAddress = req.param('emailAddress')
        var formerror = req.param('formerror')
        var idType = req.param('idType')
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var isMobile = req.useragent.isMobile
        // re-render the page along with the parameter
        res.render('service-access/v3/service-access-photo-id-camera', { vouch: vouched, service: service, serviceName: serviceName, emailAddress: emailAddress, mobileNum: mobileNum, formerror: formerror, idType: idType, changetomobile: changetomobile, mobile: isMobile }, function(err, html) {
            res.send(html)
        })
    })
}
