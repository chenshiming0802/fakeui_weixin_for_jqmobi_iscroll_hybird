// Sets the require.js configuration for your application.
require.config( {

	baseUrl: "js",

	// 3rd party script alias names
	paths: {

		// Core Libraries
		"jquery": "../lib/appframework-2.1.0/appframework",
		"underscore": "../lib/backbone-1.1.2/lodash.min",
		"backbone": "../lib/backbone-1.1.2/backbone",//-min
		"backbone-requirejs": ".",
		'IScroll':'../lib/iscroll5/iscroll-probe',
		'IScrollLoadData':'../lib/iscroll5/iscroll-load-data'		
	},

	// Sets the configuration for your third party scripts that are not AMD compatible
	shim: {	
		"jquery": {
			"deps": [],
			"exports": "$"
		}, 
		"backbone": {
			"deps": [ "underscore", "jquery","IScrollLoadData", ],
			"exports": "Backbone"
		}

	}

});

// Includes File Dependencies
require([
	"jquery",
	"backbone",
	"backbone-requirejs/routers/mobileRouter"
], function ( $, Backbone, Mobile ) {
	
    $(document).ready(function(){
    	$.ui.autoLaunch = false;
    	$.ui.showNavMenu = false;  	
    	$.ui.showBackbutton = false;
    	//$.ui.disableNativeScrolling();
    	//$.ui.disableSideMenu();
    	//$.ui.disableSplitView();
    	//$.ui.disableTabBar();
    	//$.ui.removeFooterMenu();
    	$.ui.launch();

    });  

	require( [ "appframework" ], function () {
		// Instantiates a new Backbone.js Mobile Router
		this.router = new Mobile();
	});
});
