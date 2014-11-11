// Category View
// =============
define([
	"jquery",
	"backbone",
    "IScrollLoadData"
], function( $, Backbone, IScrollLoadData ) {
    var mainData = {
        "datas": [
            {"title": "腾信新闻", "body": "河南城管强拆与村民持续互殴", "pic": "images/weinxin/1.png","bud":"3"},
            {"title": "订阅号", "body": "创意者联盟：刚get到一种既省钱又...", "pic": "images/weinxin/2.png","time":"早上08:47","bud":"0"},
            {"title": "有道云笔记", "body": "大名鼎鼎的康奈尔笔记法和随手...", "pic": "images/weinxin/3.png","time":"晚上18:29","bud":"0"},
            {"title": "杭电00512", "body": "陈市明：...", "pic": "images/weinxin/4.png","time":"昨天","bud":"10"}            
            ]
    };
    var tongxunluData = {
        "datas": [  
            {"title": "群聊", "pic": "images/tongxunlu/2.png"},
            {"title": "标签", "pic": "images/tongxunlu/3.png"},
            {"title": "公众号", "pic": "images/tongxunlu/4.png"},
            {"title": "寂寞", "pic": "images/tongxunlu/1.png"},
            {"title": "陈市明", "pic": "images/tongxunlu/0.png"}
            ]
    };
    var View = Backbone.View.extend( {
        initialize: function() {

        },
        events: {
          //"touchstart #f_weixin":  "f_weixin",
          //"touchstart #f_users":  "f_users",
          //"tap #f_find":  "f_find",
          //"touchstart #f_me":  "f_me"
        },             
        onLoad:function(viewName,params){  
           $.ui.loadContent("#"+viewName,false,false,"slide");
            $("#navbar").css("height","53px");     
            if(params[0]==null || params[0]==""){
                params[0] = "weixin";
            }
            if(params[0]=="tongxunlu"){
                this.renderTongxunlu();
            }if(params[0]=="faxian"){
                this.renderFaxian();
            }if(params[0]=="me"){
                this.renderMe();
            }else{
                this.renderWeixin();
            }
            
            that = this;
            //footer的按钮
            $("#f_weixin").bind("touchstart",function(){
                that.renderWeixin();
            });
            $("#f_tongxunlu").bind("touchstart",function(){
                that.renderTongxunlu();
            });
            $("#f_faxian").bind("touchstart",function(){
                that.renderFaxian();
            });
            $("#f_me").bind("touchstart",function(){
                that.renderMe();
            });  

            

        },
        f_b:function(id){
            $("#"+id).addClass("co_pr");
            $("#f_weixin").removeClass("co_pr");
            $("#f_tongxunlu").removeClass("co_pr");
            $("#f_faxian").removeClass("co_pr");
            $("#f_me").removeClass("co_pr");
            $("#"+id).removeClass("co_pr");
            $("#"+id).addClass("co_pr");
        },
        renderMe:function(){
            this.f_b("f_me");
            var page = $("#main_me").clone();    
            $("#main .spr_body").html(page.html());  
        },
        renderFaxian:function(){
            this.f_b("f_faxian");
            var page = $("#main_faxian").clone();    
            $("#main .spr_body").html(page.html());  
        },
        renderTongxunlu:function(){
            this.f_b("f_tongxunlu");
            var page = $("#main_tongxunlu").clone();
            var iUl = page.find("#iUl");
            var iPic = iUl.find("#iPic");
            var iIit = iUl.find("#iIit"); 
            var sb = "";

            for(var i in tongxunluData.datas){
                var model = tongxunluData.datas[i];
                iPic.attr("src",model.pic);
                iIit.text(model.title);
                sb += iUl.html();   
            }
            iUl.html(sb);

            $("#main .spr_body").html(page.html());  

            new IScrollLoadData(
                document.querySelector('#main .spr_body'),
                document.querySelector('#main ul'),
                this.dropTopAction,
                this.dropBottomAction,
                30
            );              
        },
        renderWeixin:function(){
            this.f_b("f_weixin");
            var page = $("#main_weixin").clone();
            var iUl = page.find("#iUl");
            var iPic = iUl.find("#iPic");
            var iBud = iUl.find("#iBud");
            var iIit = iUl.find("#iIit"); 
            var iBod = iUl.find("#iBod");
            var iTim = iUl.find("#iTim");

            var sb = "";
            for(var i in mainData.datas){
                var model = mainData.datas[i];
                iPic.attr("src",model.pic);
                iIit.text(model.title);
                iBod.text(model.body);
                iTim.text(model.time);
                if(model.bud!="0"){
                    iBud.text(model.bud);
                    iBud.css("display","block");
                }else{
                    iBud.text(model.bud);
                    iBud.css("display","none");
                }
                sb += iUl.html(); 
            }
            iUl.html(sb);
            $("#main .spr_body").html(page.html());  

            $("#main #iUl li").bind("tap",function(){
                //T.log("to #main_1");
                $.ui.loadContent("#main_1",false,false,"slide");
            }); 
            T.pressDisplay($("#main #iUl li"));    

            new IScrollLoadData(
                document.querySelector('#main .spr_body'),
                document.querySelector('#main ul'),
                this.dropTopAction,
                this.dropBottomAction,
                30
            );                      
        },
        renderList:function(model){
        }
    } );
    return View;

} );