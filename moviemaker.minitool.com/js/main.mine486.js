!function(){var t=window.BaseJS=window.BaseJS||{}
t.popupBox={init:function(){return $(".js-popup-box").length<1?!1:void $(".js-popup-box").on("click",function(){var e=$(this),o=void 0!==e.attr("data-src")?e.attr("data-src"):void 0!==e.attr("src")?e.attr("src"):e.attr("href"),i=e.attr("data-width"),n=e.attr("data-height"),a=e.attr("data-show"),s=e.attr("data-type")
return"iframe"===s&&t.popupBox.iframe(o,i,n,a),"image"===s&&t.popupBox.image(o,i,n,a),!1})},base:function(e,o){if("object"!=typeof e)return!1
for(var i="number"==typeof parseInt(e.width)?e.width:null,n="number"==typeof parseInt(e.height)?e.height:null,a=['<div class="popup-box-outside">','<div class="popup-box-wrap" style="width:'+i+"px; height:"+n+'px;">','<div class="popup-box-closed"><span></span><span></span></div>',"</div>",'<div class="popup-box-outside-closed"></div>',"</div>"],s=("string"==typeof e.showType?e.content:"scale","string"==typeof e.content?e.content:""),r="",l=0;l<a.length;l++)r+=2==l?s+a[l]:a[l]
$(".popup-box-outside").length<1&&$(document).find("body").append(r),"function"==typeof o&&o(),t.popupBox.closed()},iframe:function(e,o,i,n){var a='<iframe src="'+e+'" class="popup-box-content" width="'+o+'" height="'+i+'"></iframe>',s={width:o,height:i,showType:"string"==typeof n?n:null,content:a}
t.popupBox.base(s,function(){$(".popup-box-wrap").addClass("iframe")})},image:function(e,o,i,n){var a='<img src="'+e+'" class="popup-box-content" width="'+o+'" height="'+i+'" />',s={width:o,height:i,showType:"string"==typeof n?n:null,content:a}
t.popupBox.base(s,function(){$(".popup-box-wrap").addClass("image")})},closed:function(){$(".popup-box-outside-closed, .popup-box-closed").on("click",function(t){$(".popup-box-outside").remove(),t.stopPropagation(),t.preventDefault()})}},t.scroll={scrollTo:function(t,e){var t="number"==typeof t?t:$(t).offset().top
e="number"==typeof e?e:500,$("body,html").animate({scrollTop:t+"px"},e)},linkTo:function(){var e=$("a")
e.each(function(e,o){var i=$(this).attr("href"),n=/^#.*/
if(n.test(i)&&$(i).length>0){$(i).offset().top
$(this).on("click",function(){return t.scroll.scrollTo(i,0),!1})}})},animate:function(t){var e=$(window).height(),o=$(window).scrollTop()
t.each(function(t,i){var n=$(i),a=n.offset().top
e+o>a&&(void 0!=n.attr("data-delay")&&n.css("transition-delay",n.attr("data-delay")+"s"),n.addClass("run"))})}},t.lazyload={elemClass:".js-lazyload",before:200,init:function(){return $(t.lazyload.elemClass).length<1?!1:void t.lazyload.lazyloaded()},lazyloaded:function(){var e=$(t.lazyload.elemClass)
e.each(function(o,i){e.eq(o).offset().top<$(window).height()+$(window).scrollTop()+t.lazyload.before&&t.lazyload.loading(e.eq(o))}),$(window).scroll(function(){e.each(function(o,i){e.eq(o).attr("src")!==e.eq(o).attr("data-src")&&e.eq(o).offset().top<$(window).scrollTop()+$(window).height()+t.lazyload.before&&t.lazyload.loading(e.eq(o))})})},loading:function(t){var e=t.attr("data-src")
"img"==t[0].tagName.toLowerCase()?t.attr("src",e):t.css("background-image","url("+e+")")}},t.get=function(t,e){var e=void 0!==e?e:window.location.href,o=null
if("#"==t)o=void 0==e.split("#")[1]?null:e.split("#")[1]
else if("string"==typeof t){var i=e.split("?")[1]
if(void 0!==i)for(var n=i.split("&"),a=0;a<n.length;a++){var s=n[a].split("=")
s[0]===t&&(o=s[1])}}return o},t.fixed=function(t,e){var o=$(t).offset().top
$(window).scroll(function(){$(window).scrollTop()>o&&$(e).css({position:"fixed",top:"0",left:"0"})})},t.setCookie=function(t,e,o,i,n){var a=new Date
expiresField="",pathField=void 0===i?"":";path="+i,domainField=void 0===n?"":";domain="+n,a.setTime(a.getTime()+24*o*60*60*1e3),expiresField=void 0==o?"":";expires="+a.toGMTString(),document.cookie=t+"="+e+expiresField+pathField+domainField},t.getCookie=function(t){var e,o,i,n,a=document.cookie
return a.length>0&&(e=a.indexOf(t+"="),-1!=e)?(o=e+t.length+1,i=-1==a.indexOf(";",o)?a.length:a.indexOf(";",o),n=a.substring(o,i)):""},t.afterOnload={functionArr:[],scriptArr:[],addFunction:function(t){"function"==typeof t&&this.functionArr.push(t)},addScript:function(t,e,o){var i={url:t,id:e}
"function"==typeof o&&(i.callback=o),this.scriptArr.push(i)},loadScript:function(t,e,o){var i=document,n=i.createElement("script"),a=i.getElementsByTagName("head")[0]
n.src=t,n.id=e,"function"==typeof o&&(n.addEventListener?n.addEventListener("load",function(){o()},!1):n.attachEvent&&n.attachEvent("onreadystatechange",function(){var t=window.event.srcElement
"loaded"==t.readyState&&o()})),a.appendChild(n)},run:function(){if(this.scriptArr.length>0)for(var t=0;t<this.scriptArr.length;t++){var e=this.scriptArr[t].url,o=this.scriptArr[t].id,i=this.scriptArr[t].callback
this.loadScript(e,o,i)}if(this.functionArr.length>0)for(var t=0;t<this.functionArr.length;t++)this.functionArr[t]()}},t.init=function(){t.popupBox.init(),t.lazyload.init()
var e=$(".mt-animate")
e.length>0&&(t.scroll.animate(e),$(window).scroll(function(){t.scroll.animate(e)}))},$(function(){t.init()})}(),function(){var t=window.Article={}
t.sending=0,t.popstate=0,t.init=function(){if($(".js-article-wrap").length>0){var e=location.href,o=$(".js-article-wrap").eq(0).attr("id")
t.replaceHistory(o,e),t.listenerPopstate(),t.scroller(),$(document).on("click",".js-article-nav-item",function(){var t=$(this).attr("href").replace(/\#/,""),e=$(document.getElementById(t)).offset().top-60
return BaseJS.scroll.scrollTo(e,500),!1})}},t.scroller=function(){var e=($(window).height(),0)
$(window).scroll(function(){var o=$(window).scrollTop(),i=location.href,n=$(".js-article-wrap"),a=o-e>0
n.length>0&&(n.each(function(e,s){var r=$(this).attr("id"),l=$(this).attr("data-title"),c=$(this).attr("data-url"),d=$(this).attr("data-nexturl"),p=$(this).height(),u=$(this).offset().top
"object"==typeof pageConfig&&1==pageConfig.autoLoad&&(a?(o>u+p/2&&t.sending<1&&n.eq(e+1).length<1&&void 0!==d&&(pageConfig.loadCount>0&&n.length<pageConfig.loadCount?(t.sending=1,n.length==pageConfig.loadCount-1?t.getPost(d,!0,function(){BaseJS.lazyload.init(),t.sending=0,t.disqus.loadCount()}):t.getPost(d,!1,function(){BaseJS.lazyload.init(),t.sending=0,t.disqus.loadCount()})):0==pageConfig.loadCount&&(t.sending=1,t.getPost(d,!1,function(){BaseJS.lazyload.init(),t.sending=0,t.disqus.loadCount()}))),o>u&&u+p>o&&(i!==c&&t.popstate<1&&t.pushHistory(r,l,c),$(this).addClass("current").siblings().removeClass("current"))):o>u&&u+p>o&&(i!==c&&t.popstate<1&&t.pushHistory(r,l,c),$(this).addClass("current").siblings(".js-article-wrap").removeClass("current")))}),e=o)})},t.pushHistory=function(t,e,o){history.pushState&&(history.pushState({id:t,url:o},e,o),$("title").text(e))},t.replaceHistory=function(t,e){history.replaceState&&history.replaceState({id:t,url:e},null,e)},t.getPost=function(e,o,i){var n="?t=partial"
o&&(n+="&l=1"),$.ajax({url:e+n,type:"POST",success:function(e){t.show(e),"function"==typeof i&&i()}})},t.show=function(t){var e=$(".js-article-wrap.current")
e.after(t)},t.listenerPopstate=function(){window.addEventListener("popstate",function(e){var o=e.state
if(o&&"object"==typeof o&&"string"==typeof o.id&&$("#"+o.id).length>0){var i=$("#"+o.id).offset().top
o.url
return t.popstate=1,$("body,html").animate({scrollTop:i+10+"px"},500,function(){t.popstate=0}),!1}})},t.disqus={loadComment:function(t,e,o){var i=t,n="string"==typeof e?e:i
disqusIdentifier="string"==typeof o?o:t,"object"==typeof DISQUS&&DISQUS.reset({reload:!0,config:function(){this.page.identifier=disqusIdentifier,this.page.url=i,this.page.title=n}})},loadCount:function(){DISQUSWIDGETS.getCount({reset:!0})},addDisqus:function(t,e){if($("#js-disqus").length<1){var o=document,i=o.createElement("script")
i.id="js-disqus",i.src="https://minitool.disqus.com/embed.js",i.setAttribute("data-timestamp",+new Date),(o.head||o.body).appendChild(i)}$(".comments-content-wrap").find("#disqus_thread").remove(),t.append('<div id="disqus_thread"></div><noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>'),"function"==typeof e&&e()},bind:function(){$(document).on("click",".comments-btn",function(){var e=$(this),o=$(this).parents(".js-article-wrap").attr("data-url"),i=$(this).parents(".js-article-wrap").attr("data-title"),n=$(".comments-content-wrap"),a=e.parents(".js-article-wrap").find(".comments-content-wrap")
if(n.hasClass("active")){var s=$(".comments-content-wrap.active").parents(".js-article-wrap")
if(n.removeClass("active"),console.log(n.hasClass("active")),s.attr("id")==e.parents(".js-article-wrap").attr("id"))return!1}a.addClass("active"),t.disqus.addDisqus(a,function(){t.disqus.loadComment(o,i)})}),$(document).on("click",".comments-close-btn",function(){$(".comments-content-wrap").removeClass("active")})}}}()
