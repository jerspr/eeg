var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

sass.compiler = require('node-sass');

//Gulp EEG
gulp.task('eeg-plugins-css', function () {
  return gulp.src(['./vendors/bootstrap/css/bootstrap.css'])
    .pipe(sourcemaps.init())
    .pipe(concat('plugins.min.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('eeg-sass', function () {
  return gulp.src(['./sass/main.scss'])
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
		    browsers: ['last 2 versions'],
			  cascade: false
		 }))
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('eeg-plugins-js', function() {
  return gulp.src(['./vendors/jquery/jquery-3.3.1.js', './vendors/bootstrap/js/popper.js', './vendors/bootstrap/js/bootstrap.js', './vendors/stickit/jquery.stickit.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('plugins.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('eeg-scripts', function() {
  return gulp.src(['./js/main.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js/'));
});
