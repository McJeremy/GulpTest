var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('jsMinOne',function(){
   return gulp.src(['script/*.js','script/!**/*.min.js'])
       .pipe(uglify())
       .pipe(rename({suffix:'.min'}))
       .pipe(gulp.dest('script/'))
       .pipe(notify({message:'哎呀，压得好爽！'}));
});

