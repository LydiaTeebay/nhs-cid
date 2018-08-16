const gulp = require('gulp')
const config = require('../config').gulp
const path = require('path')
const srcPath = './assets/nhsonline'
//const assetsLocation = path.join(config.paths.nodeModules, 'frontend-library', 'app')
const runSequence = require('run-sequence')

gulp.task('move-nhsonline-styles', () => {
  return gulp.src('./assets/nhsonline/**/*')
    .pipe(gulp.dest(path.join(config.paths.assets, 'scss/nhsonline')))
})

gulp.task('move-nhsonline-assets', function (done) {
  runSequence(
    'move-nhsonline-styles',
     done
   )
})
