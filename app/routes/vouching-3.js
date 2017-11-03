module.exports = function (router) {
  router.get('/clinical/vouching-3', function (req, res) {
    // pull in the url parameter
    var theReason = req.param('reason')
    // re-render the page along with the parameter
    res.render('clinical/vouching-3', {reason: theReason}, function(err, html) {
      res.send(html)
    })
  })
}

// http://localhost:8080/api/users/chris
// app.get('/clinical/vouching-3', function(req, res) {
//   res.send('What is up ' + req.reason + '!')
// })

// module.exports = function (input, req) {
//   input.title = 'Complex page flow'
//
//   if (req.method === 'GET') {
//     // if the redirect variable is for the simple page flow example,
//     // increment a counter in the session that it will pick up
//     if (input.redirect === 'simple-page-flow') {
//       const validated = req.session.validated || {}
//
//       req.session.validated = Object.assign({}, validated, {
//         complexVisited: (validated.complexVisited || 0) + 1
//       })
//     }
//   }
//
//   return input
// }

// routes will go here
// app.get('/api/users', function(req, res) {
//   var reason = req.param('reason');
//   res.send(user_id + ' ' + token + ' ' + geo);
// })

// module.exports = function (input) {
//   input.title = 'Simple page flow'
//   return input
// }

// module.exports = function (input, req) {
//   if (req.method === 'POST') {
//     console.log('page GET')
//   }
//   console.log('page redirect')
//   return input
// }