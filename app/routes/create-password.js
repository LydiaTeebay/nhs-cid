const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (router) {
    router.get('/create-account/v20/create-password', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')

        if (vouched === 'yes') {
            res.redirect('/create-account/v20/create-password?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v20/create-password', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, manual: manual }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v20/create-password', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')

        if (vouched === 'yes') {
            res.redirect('/create-account/v20/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v20/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&manual=' + manual )
    })

    router.get('/create-account/v19/create-password', function (req, res) {
        // pull in the url parameters
        var vouched = req.param('vouch')
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')

        if (vouched === 'yes') {
            res.redirect('/create-account/v19/create-password?vouch=yes')
            return
        }
        // re-render the page along with the parameter
        res.render('create-account/v19/create-password', { vouch: vouched, service: service, serviceName: serviceName, hidehead: hidehead, poluser: poluser, devMode: devMode, returnUrl: returnUrl, lsId: lsId, lsAccess: lsAccess, lsStudy: lsStudy, manual: manual }, function(err, html) {
            res.send(html)
        })
    })
    router.post('/create-account/v19/create-password', function (req, res) {
        var emailAddress = req.body.emailAddress
        var mobileNum = req.body.mobileNum
        var service = req.param('service')
        var serviceName = req.param('serviceName')
        var vouched = req.param('vouch')
        var hidehead = req.param('hidehead')
        var poluser = req.param('poluser')
        var lsId = req.param('lsId')
        var lsAccess = req.param('lsAccess')
        var lsStudy = req.param('lsStudy')
        var devMode = req.param('devMode')
        var returnUrl = req.param('returnUrl')
        var manual = req.param('manual')

        if (vouched === 'yes') {
            res.redirect('/create-account/v19/two-step-code?vouch=yes')
            return
        }
        res.redirect('/create-account/v19/check-email?terms=yes&emailAddress=' + emailAddress + '&mobileNum=' + mobileNum + '&service=' + service + '&serviceName=' + serviceName + '&hidehead=' + hidehead + '&devMode=' + devMode + '&returnUrl=' + returnUrl + '&poluser=' + poluser + '&lsId=' + lsId + '&lsAccess=' + lsAccess + '&lsStudy=' + lsStudy + '&manual=' + manual )
    })

}