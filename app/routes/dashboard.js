module.exports = function (router) {
  router.get('/account/dashboard', function (req, res) {
    // pull in the url parameter
    var vouched = req.param('vouch')
    var vouchNew = req.param('vouchNew')
    var later = req.param('later')
    var service = req.param('service')
    var serviceName = req.param('serviceName')
    // redirect to uplift page

    if (service === 'eredbook2') {
        res.redirect('/service-access/service-access-eredbook-02?service=' + service + "&serviceName=" + serviceName)
        return
    }
    if (service === 'eredbook') {
        res.redirect('/service-access/service-access-eredbook-02?service=' + service + "&serviceName=" + serviceName)
        return
    }
    if (service === 'childrecord' || service === 'results') {
      res.redirect('/prove-your-identity/v4/pyi-uplift?service=' + service + "&serviceName=" + serviceName)
      return
    }
    if (service === 'record') {
        res.redirect('/prove-your-identity/v3/pyi-uplift?service=' + service + "&serviceName=" + serviceName)
        return
    }
    // re-render the page along with the parameter
    res.render('account/dashboard', {vouch: vouched, vouchNew: vouchNew, service: service, serviceName: serviceName, later: later}, function(err, html) {
      res.send(html)
    })
  })
}