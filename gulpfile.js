var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
          console.log("Hooray you created a gulp task");
          });

gulp.task('html', function() {
    console.log("imagine something useful being done to your htm here");
});

gulp.task('watch', function() {
    
     watch('./index.html', function(){
        gulp.start('html'); 
     });
});