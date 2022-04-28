/* eslint-disable node/no-unpublished-require */
/* eslint-disable prettier/prettier */

const gulp = require('gulp');
const del = require('del');

gulp.task('default', () => {
	return del(['build/']);
});
