const gulp = require('gulp')
const config = require('../config').gulp
const path = require('path')
const srcPath = './assets/'
const assetsLocation = path.join(config.paths.nodeModules, 'frontend-library', 'app')
const runSequence = require('run-sequence')

gulp.task('move-nhsuk-styles', () => {
  return gulp.src(path.join(assetsLocation, 'styles/**/*'))
    .pipe(gulp.dest(path.join(config.paths.assets, 'scss/nhsuk')))
})

gulp.task('move-nhsuk-images', () => {
  return gulp.src(path.join(assetsLocation, 'assets/images/**/*'))
    .pipe(gulp.dest(path.join(config.paths.public, 'images')))
})

gulp.task('move-images', () => {
  return gulp.src(path.join(srcPath, 'images/**/*'))
    .pipe(gulp.dest(path.join(config.paths.public, 'images')))
})

gulp.task('move-scripts', () => {
  return gulp.src(path.join(srcPath, 'javascripts/**/*'))
    .pipe(gulp.dest(path.join(config.paths.public, 'scripts')))
})

gulp.task('move-nhsuk-assets', function (done) {
  runSequence(
    'move-nhsuk-styles',
    'move-nhsuk-images',
    'move-images',
    'move-scripts',
     done
   )
})
