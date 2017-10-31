// module.exports = function (router) {
//   router.get('/vouching-1', function (req, res) {
//     res.render('vouching-1', {
//       title: 'NHSUK prototype kit',
//     })
//     console.log('Accessing the secret section ...')
//   })
// }

// module.exports = function (input) {
//   input.title = 'Simple page flow'
//   return input
// }

module.exports = function (input, req) {
  if (req.method === 'POST') {
    console.log('page GET')
  }
  console.log('page redirect')
  return input
}