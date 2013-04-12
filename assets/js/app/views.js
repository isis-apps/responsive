APP.Views.Sidenav = Backbone.UI.Sidenav.extend({
	
		resize: function() {
			$(this.el).removeClass('ui-sidenav-active');
			
		},
		
		remove: function() {
			// unbind the namespaced 
			$(window).unbind("resize");
	
			// don't forget to call the original remove() function
			Backbone.View.prototype.remove.call(this);
		}
});