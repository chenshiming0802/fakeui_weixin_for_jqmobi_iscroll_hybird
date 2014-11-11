// Category View
// =============
define([
	"jquery",
	"backbone"
], function( $, Backbone ) {
    
    var View = Backbone.View.extend( {
        initialize: function() {
            //$("#afui").bind("touchstart", this.afui_b);
            //$("#afui").bind("touchend", this.afui_e);
            //$("#bt2").bind("touchstart", this.bt2);
        },
        events: {
          "touchstart #bt1":  "bt2"
        },             
        onLoad:function(viewName,params){
            //alert('hi');
            //alert((this.$el).html());
            //alert((this.$el.find("#bt1")).val());
 
        },
        renderList:function(collection){
        },
        afui_b:function(){
            var color = $("#afui").css("color");
            var background = $("#afui").css("background-color");
            //alert(color+"/"+background);
            $("#afui").css("background-color",color);
            $("#afui").css("color",background);
        },
        afui_e:function(){
            var color = $("#afui").css("color");
            var background = $("#afui").css("background-color");
            //alert(color+"/"+background);
            $("#afui").css("background-color",color);
            $("#afui").css("color",background);
        },
        bt2:function(){
            alert("hi");
            var color = $("#afui").css("background");
            $("#afui").css("background",color=="red"?"blue":"red");
        },
        taptest2t:function(){
            alert('1');
        },
        pareseEvents:function(){
           for(var key in this.events) {
                var ks = key.split(" ");
                $(ks[1]).bind(ks[0], this.events[key]);
            }
        }
    } );
    return View;

} );