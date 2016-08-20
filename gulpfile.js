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

var js_dir = 'public/assets/js/';
var css_dir = 'public/assets/css/';
var dist_dir = 'public/assets/dist/';

var paths = {
    scripts: [
        js_dir +'angular/awesome-edit/dist/a-edit.js',

        js_dir +'admin-app/modules/general/general.js',
        js_dir +'admin-app/modules/pages/pages.js',
        js_dir +'admin-app/modules/database/database.js',
        js_dir +'admin-app/modules/mailing/mailing.js',

        js_dir +'admin-app/app.js',
        js_dir +'admin-app/**/*.js'
    ],
    styles: [
        js_dir + 'angular/awesome-edit/dist/a-edit.css',
        css_dir + 'sb-admin.css'
    ]
};

gulp.task('concatAngularVendorJS', function() {
    return gulp.src([
            js_dir + 'angular/angular.min.js',
            js_dir + 'angular/ui-bootstrap*',
            js_dir + 'angular/awesome-edit/dist/a-edit.js',
            js_dir + 'angular/*.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('concatAdminAppJS', function() {
    return gulp
        .src([
            js_dir + 'admin-app/modules/general/general.module.js',
            js_dir + 'admin-app/modules/pages/pages.module.js',
            js_dir + 'admin-app/modules/database/database.module.js',
            js_dir + 'admin-app/modules/mailing/mailing.module.js',
            js_dir + 'admin-app/app.module.js',

            js_dir + 'admin-app/**/*.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('concatAdminAppCSS', function() {
    return gulp.src(paths.styles)
        .pipe(concatCss("app.css"))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('watch', function() {
    gulp.watch(js_dir + 'angular/**/*.js', ['concatAngularVendorJS']);
    gulp.watch(js_dir + 'admin-app/**/*.js', ['concatAdminAppJS']);
    gulp.watch(paths.styles, ['concatAdminAppCSS']);
});

gulp.task('default', ['concatAngularVendorJS', 'concatAdminAppJS', 'concatAdminAppCSS', 'watch']);