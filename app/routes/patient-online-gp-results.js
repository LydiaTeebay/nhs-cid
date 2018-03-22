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
      String.prototype.replaceAll = function(f,r){return this.split(f).join(r);}
      data = $('.grid-row').html();

      gpResults = data.replaceAll('</li>', '<hr style="margin-bottom: 32px" /></li>').replaceAll('https://systmonline.tpp-uk.com/Login', 'patient-online-gp-online').replaceAll('https://patient.emisaccess.co.uk/appointments/available','patient-online-gp-online');



      var someObjArr = [];

      $('.results__name').each(function(i, element){

        //Get the text from cheerio.
        var text = $(this).text();
    
        console.log($(this).text());
        
        //if undefined, create the object inside of our array.
        if(someObjArr[i] == undefined){
    
            someObjArr[i] = {};
        };
    
        //Update the name property of our object with the text value.
        someObjArr[i].name = text;
      });

      $('.results__address').each(function(i, element){
        var text = $(this).text();
        console.log($(this).text());
        if(someObjArr[i] == undefined){
            someObjArr[i] = {};
        };
        someObjArr[i].address = text;
      });

      // also includes the distance ??
      $('.results__address').each(function(i, element){
        //Get the text from cheerio.
        var text = $(this).text();
        //console.log($(this).text());
        if(someObjArr[i] == undefined){
            someObjArr[i] = {};
        };
            someObjArr[i].address = text;
      });

      console.log(someObjArr);
      
      res.render('patient-online/v7/patient-online-gp-results', { serviceName: serviceName, hidehead: hidehead, postcode: postcode, search: search, gpResults: gpResults  }, function(err, html) {
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