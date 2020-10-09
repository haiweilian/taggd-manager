const { series, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')

function scssTask() {
  return src('./src/*.scss')
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(
      rename({
        basename: 'taggd',
        extname: '.css',
      })
    )
    .pipe(dest('./dist'))
}

function watchTask() {
  watch(['./src/*.scss'], scssTask)
}

exports.build = series(scssTask)
exports.default = series(scssTask, watchTask)
