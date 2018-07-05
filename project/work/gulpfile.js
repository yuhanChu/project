var project = "app";
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var gulpPlumber = require("gulp-plumber");
var autoprefixer = require('gulp-autoprefixer');
var proxy = require('http-proxy-middleware')

changeRootDir()

function changeRootDir() {
    var argvs = process.argv;
    var _p = argvs.find(function(a) {
        return /^--\$/.test(a);
    })

    if (_p) {
        project = _p.slice(3)
    }
};

gulp.task('lr', () => {
    browserSync.init({
        server: {
            baseDir: project + '/'
        },
        open: "external",
        middleware: [
            proxy('/api', {
                target: 'http://192.168.1.188',
                changeOrigin: true,
            })
        ],
    });
})

gulp.task('watch', function() {
    gulp.watch(project + '/scss/**/*.scss', ['sass']);
    gulp.watch(project + '/*.html', browserSync.reload);
    gulp.watch(project + '/js/**/*.js', browserSync.reload);
})

gulp.task('images', function() {
    return gulp.src(project + '/images/**/*.+(png|jpg|gif|svg)')
        .pipe(gulpPlumber())
        .pipe(imagemin())
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest(project + '/images'))
});


gulp.task('sass', function() {
    return gulp.src(project + '/scss/**/*.scss')
        .pipe(gulpPlumber()) //compressed compact expanded
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(project + '/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});



gulp.task("default", ['lr', 'watch', 'sass', 'images']);