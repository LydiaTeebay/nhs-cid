module.exports = function (router) {
    router.get('/id-checker/v1/id-checker-profile-1', function (req, res) {
      // pull in the url parameter
      //var vouched = req.param('vouch')

      var nhsNumber = req.param('nhsNumber');
      var nameMatchPDS = req.param('nameMatchPDS');
      var nameMatchID = req.param('nameMatchID');
      var dateMatchID = req.param('dateMatchID');
      var videoMatchID = req.param('videoMatchID');
      // re-render the page along with the parameter
      res.render('id-checker/v1/id-checker-profile-1', { nhsNumber: nhsNumber,
                                                      nameMatchPDS: nameMatchPDS,
                                                      nameMatchID: nameMatchID,
                                                      dateMatchID: dateMatchID,
                                                      videoMatchID: videoMatchID }, function(err, html) {
          res.send(html)
      })


      //console.log("updating the checking progress")
      // re-render the page along with the parameter
      //res.render('create-account/v1/create-1', {vouch: vouched}, function(err, html) {
      //  res.send(html)
      //})
    })
  }