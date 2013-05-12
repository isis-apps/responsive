APP.Routers.Default = APP.Router.extend({
	initialize: function(){
		// instantiate view
		_.bindAll(this, "index");
	},
	routes: {
		"": "index"	
	},
	index: function(){
		
		var sidenavView = new APP.Views.Sidenav({
			el : 'body > .ui-sidenav'
		});
		if( !this.state.mobile ){ 
				$(window).bind("resize", _.bind(sidenavView.resize, sidenavView));
		}
		
		var slideshowView = new Backbone.UI.Slideshow({
			el : "#slideshow", 
			collection : new Backbone.Collection(slides),
			url : "assets/html/slides.html"
		});
		
		var collapsibleView = new Backbone.UI.Collapsible({
			el : '.ui-collapsible'
		})
		
		slideshowView.render();

	
	}
});

