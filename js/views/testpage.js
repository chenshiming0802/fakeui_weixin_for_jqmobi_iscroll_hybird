// Category View
// =============
define([
	"jquery",
	"backbone",
    "IScrollLoadData"
], function( $, Backbone,IScrollLoadData ) {
    
    var View = Backbone.View.extend( {
        initialize: function() {
        },
        onLoad:function(viewName,params){
            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
            this.loaded();
            //$.ui.loadContent("#"+viewName,false,false,"slide");
            //setTimeout("T.redirect(\"#services?assignme\");",1000);    
        },
        dropTopAction:function (cb){
            setTimeout(function(){
                var d=document.createDocumentFragment();
                for(var i=0;i<3;i++){
                  var li=document.createElement('li');
                  li.innerText='Generated top row '+new Date().getTime();
                  d.appendChild(li);
                }
                cb(d);
            },500);
        },
        dropBottomAction:function (cb){
            setTimeout(function(){
                var d=document.createDocumentFragment();
                for(var i=0;i<3;i++){
                  var li=document.createElement('li');
                  li.innerText='Generated bottom row '+new Date().getTime();
                  d.appendChild(li);
                  
                }
                cb(d);
            },500);
        },
        loaded:function (){
            var wrapper=document.querySelector('#wrapper');
            var content=document.querySelector('#thelist');
            new IScrollLoadData(wrapper,content,this.dropTopAction,this.dropBottomAction,30);
        },
        renderList:function(collection){
        }
    } );
    return View;

} );