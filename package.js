Package.describe({
	name: 'nathantreid:css-modules-js',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'JS 2015 build plugin for nathantreid:css-modules',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});


Package.registerBuildPlugin({
	name: 'css-modules-build-plugin',
	use: ['nathantreid:css-modules-js-compiler'],
	sources: [
		'plugin.js'
	]
});

Package.onUse(function (api) {
	api.versionsFrom('1.2.0.1');
	api.use('isobuild:compiler-plugin@1.0.0');

	api.imply('babel-runtime');
	api.imply('ecmascript-runtime');
	api.imply('promise');

	api.export("ECMAScript");
});