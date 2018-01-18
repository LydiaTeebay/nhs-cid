// notify integration
let apiKey = 'cidprototype-96856a46-bebf-4032-881a-d7b35262e5c8-8433d391-d07a-484d-86b0-0406a2203a01'
let templateId = 'b3b25c49-aa73-4a10-875e-0c0d40dbf2c6'
let smsSender = '8e63067f-0698-45d5-ac59-946c2089c058'
const NotifyClient = require('notifications-node-client').NotifyClient, notifyClient = new NotifyClient(apiKey)

module.exports = function (router) {
    router.get('/prove-your-identity/pyi-scan-id-intro-mob', function (req, res) {
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        // var mobileNum = "07846679319"
        var mobileNum = "07980802645"
        // send text message
        if (changetomobile === 'yes') {
            console.log("sending text")
                notifyClient
                    .sendSms(templateId, mobileNum, {
                        smsSenderId: smsSender })
                    .then(response => console.log(response))
            .catch(err => console.error(err))
        }
        res.redirect('/prove-your-identity/pyi-scan-id-intro?changetomobile=yes')
        return
    })
    router.get('/prove-your-identity/v4/pyi-scan-id-intro-mob', function (req, res) {
        var changetomobile = req.param('changetomobile')
        // is the user on a mobile device?
        var mobileNum = "07846679319"
        // var mobileNum = "07980802645"
        // send text message
        if (changetomobile === 'yes') {
            console.log("sending text")
            notifyClient
                .sendSms(templateId, mobileNum, {
                    smsSenderId: smsSender })
                .then(response => console.log(response))
        .catch(err => console.error(err))
        }
        res.redirect('/prove-your-identity/v4/pyi-scan-id-intro?changetomobile=yes')
        return
    })
}
