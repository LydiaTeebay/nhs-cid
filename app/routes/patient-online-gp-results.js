//const rp = require('request-promise');
//const cheerio = require('cheerio');

const request = require('request');
const rp = require('request-promise');
const cheerio = require('cheerio');

module.exports = function (router) {
  router.get('/patient-online/patient-online-gp-results', function (req, res) {
    //var service = req.param('service')
    var serviceName = req.param('serviceName');
    var hidehead = req.param('hidehead');
    res.render('patient-online/patient-online-gp-results', { serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v7/patient-online-gp-results', function (req, res) {
    //var gpResults = "flaps";
    var postcode = req.param('postcode');
    var search = req.param('search');
    var service = req.param('service');
    var serviceName = req.param('serviceName');
    var hidehead = req.param('hidehead');

    let url = "https://beta.nhs.uk/book-a-gp-appointment/results?search=" + search + "&postcode=" + postcode;

    var gpResults = "";
    
    var options = {
      uri: url,
      transform: function (body) {
          return cheerio.load(body);
      }
    };

    rp(options)
    .then(function ($) {
      // Process html like you would with jQuery...
      data = $('.grid-row').html();
      gpResults = data;
      
      res.render('patient-online/v7/patient-online-gp-results', { serviceName: serviceName, service: service, hidehead: hidehead, postcode: postcode, search: search, gpResults: gpResults  }, function(err, html) {
        res.send(html)
      })
    })
    .catch(function (err) {
      // Crawling failed or Cheerio choked...
    });

    console.log(gpResults);

  })

  router.get('/patient-online/v6/patient-online-gp-results', function (req, res) {
    var serviceName = req.param('serviceName');
    var hidehead = req.param('hidehead');
    res.render('patient-online/v6/patient-online-gp-results', { serviceName: serviceName, hidehead: hidehead }, function(err, html) {
      res.send(html)
    })
  })

  router.get('/patient-online/v5/patient-online-gp-results', function (req, res) {
    var serviceName = req.param('serviceName')
    res.render('patient-online/v5/patient-online-gp-results', { serviceName: serviceName }, function(err, html) {
      res.send(html)
    })
  })
}