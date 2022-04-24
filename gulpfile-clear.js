/* eslint-disable prettier/prettier */
/* eslint-disable no-var */

var gulp = require('gulp');
var del = require('del');

gulp.task('default', () => {
	return del(['build/']);
});
