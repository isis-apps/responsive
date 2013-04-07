var app;

APP.Routers.Default = APP.Router.extend({
	initialize: function(){
		// instantiate view
		var view = new Backbone.UI.Sidenav({
			el : 'body > .ui-sidenav'
		});
	}
});

// when logic dependencies are loaded
$(function() {

	// initialize APP
	app = new APP();
	window.app = app;
	// start backbone history
	Backbone.history.start();

});
