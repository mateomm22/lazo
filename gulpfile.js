/**
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ·······  Required
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 **/
const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const cssmin = require('gulp-csso');
const plumber = require('gulp-plumber');
const prefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');



/**
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ·······  Styles
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 **/
function styles() {
  return src(['./styles/main.scss'])
    .pipe(sass())
    .pipe(prefixer('last 2 versions'))
    .pipe(cssmin({
      restructure: false
    }))
    .pipe(rename({suffix:".min"}))
    .pipe(dest('./assets'))
}


/**
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ·······  Scripts
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 **/
function scripts() {
  return src([
    './assets/*.js',
    '!./assets/*.min.js'
  ])
    .pipe(plumber())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix:".min"}))
    .pipe(dest('./assets'))
}

function serverHtml () {
  browserSync.init({
    port: 8888,
    ui: false,
    open: true,
    server: {
      baseDir: './',
      directory: true
    }
  });
}

function reload (done) {
  browserSync.reload();
  done();
}

/**
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ·······  Watch
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 **/

function watchFiles () {
  watch(['./assets/*.js', '!./assets/*.min.js'], series(scripts, reload));
  watch('./styles/**/*.scss', series(styles, reload));
}


/**
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ·······  Default
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 **/

const dev = series(styles, scripts, parallel(serverHtml, watchFiles));

exports.styles = styles;
exports.scripts = scripts;
exports.dev = dev;
