'use strict';

var gulp = require('gulp');


// Register sass tasks
var sass = require('pd-gulp-sass-task')(gulp);

sass.register({
	options:{
		banner: {
			file: './banner.txt'
		}
	},
	assets: {
		src: './src/*.scss',
		dest: './dist'
	}
},{
	watch: {
		watch: './src/**/*.scss'
	}
});



// Register javascript tasks
var js = require('pd-gulp-js-task')(gulp);

js.register({
	options:{
		banner: {
			file: './banner.txt'
		}
	},
	assets: {
		src: './src/*.js',
		dest: './dist',
		browserify: {
			standalone: 'pdOffcanvas'
		}
	}
});



