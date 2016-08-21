//var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

//elixir(function(mix) {
//    mix.sass('app.scss');
//});


var gulp = require('gulp');

var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');

var angular_dir = 'public/assets/angular/';
var css_dir = 'public/assets/css/';
var dist_dir = 'public/assets/dist/';

var paths = {
    styles: [
        angular_dir + 'awesome-edit/dist/a-edit.css',
        css_dir     + 'admin_app.css'
    ]
};

gulp.task('concatAngularVendorJS', function() {
    return gulp.src([
            angular_dir + 'vendor/angular.min.js',
            angular_dir + 'vendor/ui-bootstrap*',
            angular_dir + 'awesome-edit/dist/a-edit.js',
            angular_dir + 'vendor/*.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('concatAdminAppJS', function() {
    return gulp
        .src([
            angular_dir + 'admin_app/**/*.module.js',
            angular_dir + 'admin_app/app.module.js',

            angular_dir + 'admin_app/**/*.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('concatAdminAppCSS', function() {
    return gulp.src(paths.styles)
        .pipe(concatCss('app.css'))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('watch', function() {
    gulp.watch([angular_dir + 'vendor/**/*.js', angular_dir + 'awesome-edit/dist/a-edit.js'], ['concatAngularVendorJS']);
    gulp.watch(angular_dir + 'admin_app/**/*.js', ['concatAdminAppJS']);
    gulp.watch(paths.styles, ['concatAdminAppCSS']);
});

gulp.task('default', ['concatAngularVendorJS', 'concatAdminAppJS', 'concatAdminAppCSS', 'watch']);