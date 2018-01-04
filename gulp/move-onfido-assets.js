const gulp = require('gulp')
const config = require('../config').gulp
const path = require('path')
const srcPath = './assets/'
const assetsLocation = path.join(config.paths.nodeModules, 'onfido-sdk-ui', 'dist')
const runSequence = require('run-sequence')

gulp.task('move-onfido-styles', () => {
  return gulp.src(path.join(assetsLocation, 'style.css'))
    .pipe(gulp.dest(path.join(config.paths.assets, 'scss/onfido')))
})

gulp.task('move-onfido-scripts', () => {
  return gulp.src(path.join(assetsLocation, 'onfido.min.js'))
    .pipe(gulp.dest(path.join(config.paths.assets, 'scripts/app')))
})

gulp.task('move-onfido-assets', function (done) {
  runSequence(
    'move-onfido-styles',
    'move-onfido-scripts',
     done
   )
    console.log("moved onfido stuff")
})
