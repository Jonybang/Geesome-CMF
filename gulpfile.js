var gulp = require('gulp');
var size = require('gulp-size');

var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');

var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

var angular_dir = 'resources/angular/';
var sass_dir = 'resources/sass/';
var css_dir = 'public/css/';
var build_dir = 'public/dist/';
var build_html_dir = 'public/angular/admin_app';

var paths = {
    vendor_styles: [
        css_dir + 'angular-material.min.css'
    ],
    vendor_scripts: angular_dir + 'vendor.js',

    admin_app_sass: sass_dir + '**/*.scss',
    admin_app_styles: [
        angular_dir + 'awesome-edit/dist/a-edit.css',
        'public/css/admin_app.css'
    ],

    admin_app_scripts: [
        angular_dir + 'awesome-edit/dist/a-edit.js',
        angular_dir + 'admin_app/**/*.module.js',
        angular_dir + 'admin_app/admin_app.module.js',
        angular_dir + 'admin_app/**/*.js'
    ],
    admin_app_templates: angular_dir + 'admin_app/**/*.html'
};

//===================================================================================
// VENDOR
//===================================================================================

gulp.task('vendorJS', function() {
    return browserify(paths.vendor_scripts)
        .bundle()
        .pipe(source('vendor.js'))
        .pipe(gulp.dest(build_dir))
        .pipe(size({title: 'vendor.js'}));
});

gulp.task('vendorCSS', function() {
    return gulp.src(paths.vendor_styles)
        .pipe(concatCss('vendor.css'))
        .pipe(gulp.dest(build_dir))
        .pipe(size({title: 'vendor.css'}));
});

//===================================================================================
// ADMIN APPLICATION
//===================================================================================

gulp.task('appJS', function() {
    return gulp.src(paths.admin_app_scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(build_dir))
        .pipe(size({title: 'app.js'}));
});

gulp.task('appSASS', function () {
    return gulp.src(paths.admin_app_sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(css_dir));
});

gulp.task('appCSS', function() {
    return gulp.src(paths.admin_app_styles)
        .pipe(concatCss('app.css'))
        .pipe(gulp.dest(build_dir))
        .pipe(size({title: 'app.css'}));
});

gulp.task('appHTML', function() {
    return gulp.src(paths.admin_app_templates)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(build_html_dir));
});

//===================================================================================
// WATCH
//===================================================================================

gulp.task('watch', function() {
    gulp.watch(paths.vendor_scripts, ['vendorJS']);
    gulp.watch(paths.vendor_styles, ['vendorCSS']);

    gulp.watch(paths.admin_app_scripts, ['appJS']);
    gulp.watch(paths.admin_app_sass, ['appSASS']);
    gulp.watch(paths.admin_app_styles, ['appCSS']);
    gulp.watch(paths.admin_app_styles, ['appHTML']);
});

gulp.task('default', ['vendorJS', 'vendorCSS', 'appJS', 'appSASS', 'appCSS', 'appHTML', 'watch']);