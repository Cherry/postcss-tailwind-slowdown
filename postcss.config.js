'use strict';

module.exports = ({mode}) => {
	const plugins = [
		require('postcss-import')({
			path: [
				"./src/css/"
			]
		}),
		require('tailwindcss'),
		require('postcss-preset-env')({
			stage: 0
		})
	];
	if(mode === 'production'){
		plugins.push(require('cssnano'));
	}
	return {plugins};
};