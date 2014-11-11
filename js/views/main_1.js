// Category View
// =============
define([
	"jquery",
	"backbone"
], function( $, Backbone ) {
    
    var View = Backbone.View.extend( {
        initialize: function() {
        },
        onLoad:function(viewName,params){
            $("#navbar").css("height","0px");
            var that = this;
            T.log("load #main_1");
            $("#main_1_back").bind("tap",function(){
                T.goBack();
            });   
        },
        renderList:function(collection){
        }
    } );
    return View;

} );