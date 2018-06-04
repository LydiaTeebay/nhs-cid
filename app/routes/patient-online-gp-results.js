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

  router.get('/patient-online/v8/patient-online-gp-results', function (req, res) {
    var postcode = req.param('postcode');
    var search = req.param('search');
    var service = req.param('service');
    var serviceName = req.param('serviceName');
    var hidehead = req.param('hidehead');

    let url = "https://beta.nhs.uk/book-a-gp-appointment/results?search=" + search + "&postcode=" + postcode;

    var gpResults = "";
    console.log("TESTING!!!");

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
      

      //console.log(gpResults);
      //var headers = $('h3');
    //for(var i = 0; i < headers.length(); i++) {
     //   console.log(headers[i]);
     // }

      $('h3').each(function( index ) {

        console.log( index + ": " + $( this ).text() );

        if ($(this).has("a").length) {
          console.log("has a child");
        } else {
          console.log("NO child");
          // $(this)
          // http://localhost:3000/patient-online/v8/patient-online-british-id?serviceName=NHS%20App&service=app&system=emis&hidehead=undefined&poluser=true
          //$(this).wrapInner('<a href="' + $(this).html() + '" />');
          //$(this).wrapInner('<a href="http://localhost:3000/patient-online/v8/patient-online-british-id?serviceName=NHS%20App&service=app&system=emis&hidehead=undefined&poluser=true">TESTING</a>');
         // $(this).append('<a href="#">TESTING</a>');
         // $(this).html('<a href="">TESTING</a>');



          var link = $("<a>");
          link.attr("href", "http://www.google.com");
          link.attr("title", "Google.com");
          link.text("Google");
          link.addClass("link");
 
          $(this).html(link);
          $(this).append(link);
          //$(this).append('<a href="' + $(this).html() + '">'+$(this).html()+'</a>');
        }

        
        // ( $( "ul" ).has( "li" ).length ? "Yes" : "No" ) +
        
        console.log("first child" + $(this).children().first()); //.prop("tagName"));

        //if ($(this).children().first().prop("tagName") !== "") {
        //  console.log("has a child");
        //} else {
        //  console.log("no child present");
        //}
        
        //console.log("child tagname: " + $(this).first().prop("tagname"));
        //var element = document.getElementById('myImgElement');
        console.log('Tag name: ' + $(this).prop("tagName"));
      });
      //console.log(headers);
      //var element = document.getElementById('myImgElement');
//console.log('Tag name: ' + element.tagName);

      res.render('patient-online/v8/patient-online-gp-results', { serviceName: serviceName, service: service, hidehead: hidehead, postcode: postcode, search: search, gpResults: gpResults  }, function(err, html) {
        res.send(html)
      })
    })
    .catch(function (err) {
      // Crawling failed or Cheerio choked...
    });

    console.log(gpResults);

  })

  router.get('/patient-online/v7/patient-online-gp-results', function (req, res) {
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