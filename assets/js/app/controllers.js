APP.Routers.Default = APP.Router.extend({
	initialize: function(){
		// instantiate view
		var sidenavView = new APP.Views.Sidenav({
			el : 'body > .ui-sidenav'
		});
		if( !this.state.mobile ){ 
				$(window).bind("resize", _.bind(sidenavView.resize, sidenavView));
		}
		var sliderView = new Backbone.UI.Slider({
			el : "#slider", 
			collection : new Backbone.Collection(slides),
			url : "assets/html/slider.html"
		});
		
		sliderView.render();
	}
});

