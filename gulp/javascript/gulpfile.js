const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', ()=> {
    return gulp.src('src/**/*.js')
    // Babel é usado principalmente para converter o código ECMAScript 2015+ em uma versão compatível com versões anteriores do JavaScript     
    .pipe(babel({
        comments: false,
        presets: ["env"]
    }))
    .pipe(uglify())
    .on('error', function (err) { console.log(err) })
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
})