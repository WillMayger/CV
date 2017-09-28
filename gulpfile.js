const gulp = require('gulp'),
      sass = require('gulp-sass'),
      exec = require('gulp-exec'),
      concat = require('gulp-concat'),
      cssnano = require('gulp-cssnano'),
      merge = require('merge-stream')
;

gulp.task('start', function() {
  const options = {
    continueOnError: false, // default = false, true means don't emit error event
    pipeStdout: false, // default = false, true means stdout is written to file.contents
  };

  const reportOptions = {
  	err: true, // default = true, false means don't write err
  	stderr: true, // default = true, false means don't write stderr
  	stdout: true // default = true, false means don't write stdout
  };

  return gulp.src('./*')
    .pipe(exec('npm start', options))
    .pipe(exec.reporter(reportOptions))
  ;
});

gulp.task('scss', function(){
    const scssStream = gulp.src(['./scss/mixins.scss', './scss/**/**/*.scss'])
        .pipe(concat('main.scss'))
        .pipe(sass())
    ;

    return merge(scssStream)
        .pipe(concat('main.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./public/css'))
    ;
});

gulp.task('watch', ['scss'], function (){
  gulp.watch('./scss/**/*.scss', ['scss']);
})

gulp.task('default', ['start', 'watch']);
