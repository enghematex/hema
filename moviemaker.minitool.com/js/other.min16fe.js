﻿function onYouTubeIframeAPIReady(){window.playerArr=[],$(".js-video-play").on("click",function(){var t=$(this).attr("data-vid"),o=$(this).attr("data-pid"),e={height:"315",width:"560",videoId:t,playerVars:{autoplay:1},events:{onStateChange:onPlayerStateChange}}
if($(this).parent().find("iframe").length<1){var n=new YT.Player(o,e),a=playerArr.length
playerArr.push(n),$(this).addClass("close").attr("data-playerindex",a)}else{var a=$(this).attr("data-playerindex")
playerArr[a].playVideo(),$(this).addClass("close")}return $(this).next("iframe").css({opacity:"1",zIndex:"1"}),!1})}function onPlayerStateChange(t){var o=t.target.getPlayerState(),e=t.target.getIframe().id
0===o&&($("."+e).removeClass("close"),$("."+e).next("iframe").css({opacity:"0",zIndex:"-1"}))}$(".js-mobile-menu-btn").on("click",function(){var t=$(this).attr("data-state")
"0"===t?($(this).attr("data-state","1"),$(".js-mainmenu").addClass("mobile-mainmenu-open"),$(".js-pmenutop").addClass("topchange"),$(".js-pmenubottom").addClass("bottomchange"),$("html").addClass("disabled")):($(this).attr("data-state","0"),$(".js-mainmenu").removeClass("mobile-mainmenu-open"),$(".js-pmenutop").removeClass("topchange"),$(".js-pmenubottom").removeClass("bottomchange"),$("html").removeClass("disabled"))}),$(".js-display-submenu").on("click",function(){$(this).next().hasClass("active")?$(this).next().removeClass("active"):($(".submenu").removeClass("active"),$(this).next().addClass("active"))}),$(document).on("click",function(t){-1==t.target.className.search("submenu")&&-1==t.target.className.search("js-display-submenu")&&-1==t.target.className.search("input-search")&&$(".submenu").removeClass("active")}),function(){BaseJS.get("lctid")&&BaseJS.setCookie("Last_AFF","linkconnector","30","/","minitool.com"),BaseJS.get("sscid")&&BaseJS.setCookie("Last_AFF","shareasale","30","/","minitool.com")
var t=document.createElement("script")
t.type="text/javascript",t.async="true",t.id="uts_lp",t.src="https://www.linkconnector.com/uts_lp.php?cgid=901602",document.getElementsByTagName("body")[0].appendChild(t)
var o=document.createElement("script")
o.type="text/javascript",o.src="https://www.dwin1.com/19038.js",o.defer="defer",document.getElementsByTagName("head")[0].appendChild(o)}(),$(function(){"object"==typeof Article&&(Article.init(),Article.disqus.bind()),$("#disqus_thread").length>0&&$(window).scroll(function(){if($("#disqus_thread").offset().top<$(window).scrollTop()+$(window).height()+200&&$("#js-disqus").length<1){var t=document,o=t.createElement("script")
o.id="js-disqus",o.src="//minitool.disqus.com/embed.js",o.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(o)}})
var t='<a class="icon-awe-sort-up totop">TOP</a>'
$(window).scroll(function(){$(window).width()>1535&&$(window).scrollTop()>100?($(".totop").length<1&&($(document).find("body").append(t),$(document).on("click",".totop",function(){BaseJS.scroll.scrollTo(0)})),$(".totop").css("display","block")):$(".totop").css("display","none")})}),$(function(){$(".js-share-btn").length>0&&$(document).on("click",".js-share-btn",function(){var t,o=$(this).attr("data-type"),e=JSON.parse($(this).parents(".article-share-wrap").attr("data-shareInfo")),n=e.title,a=e.url,i=e.desc,s=800,d=600,r=($(window).width()-s)/2,l=($(window).height()-d)/2
switch(o){case"facebook":t="https://www.facebook.com/sharer/sharer.php?u="+a
break
case"twitter":t="https://twitter.com/intent/tweet?url="+a+"&text="+n+"&via=MiniTool_"
break
case"linkedin":t="https://www.linkedin.com/shareArticle?mini=true&url="+a+"&title="+n+"&summary="+i+"&source=MiniTool"
break
case"hatena":t="http://b.hatena.ne.jp/entry/"+a
break
case"reddit":t="https://www.reddit.com/submit?url="+a}window.open(t,"shareWin","channelmode=yes, resizable=no, toolbar=no, directories=no, status=no, menubar=no, width="+s+", height="+d+", left="+r+", top="+l)})}),window.onload=function(){BaseJS.afterOnload.run()},$(".l_svg_anim").length>0&&BaseJS.afterOnload.addScript("/js/lottie.min.js","js-svganimate",function(){var t=$(".l_svg_anim")
if(window.l_svg_o_a=[],t.length>0)for(var o=0;o<t.length;o++){var e="string"==typeof t.eq(o).attr("data-src")?t.eq(o).attr("data-src"):"",n="canvas"===t.eq(o).attr("data-type")?"canvas":"svg",a="false"===t.eq(o).attr("data-loop")?!1:!0,i="false"===t.eq(o).attr("data-autoplay")?!1:!0,s=lottie.loadAnimation({container:t[o],renderer:n,loop:a,autoplay:i,path:e})
l_svg_o_a.push(s),t.eq(o).attr("data-index",o)}}),$(".js-video-play").length>0&&BaseJS.afterOnload.addScript("https://www.youtube.com/iframe_api","js-ytbapi"),$(function(){$(document).on("click","a",function(t){var o=$(this).attr("href")
if(void 0!=o&&-1!=o.indexOf("windows-movie-maker.exe")&&!$(this).hasClass("wmm-downbtn")){var e='<style class="downcss">.mm-downwrap{position:fixed;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,0.5);}.down-content-wrap{position:absolute;width:80%;max-width:960px;padding:50px 15px 45px;background-color:#fff;text-align:center;}.down-content-wrap p{font-size:20px;line-height:26px;}.downlist{width:100%;margin-top:30px;}.downlist .col-2-1{position:relative;padding:0 25px;}.downlist .col-2-1:first-child:after{position:absolute;content:"";width:1px;height:90%;background-color:#ababab;right:0;top:5%;}.downlist .col-2-1 .mm{padding-top:130px;}.win-mm{background:url(/images/articles/down-wmmbg.jpg) top no-repeat;background-size:cover;}.mt-mm{background:url(/images/articles/down-mmbg.jpg) top no-repeat;background-size:cover;}.down-info{padding:20px;color:#fff;}.down-info h3{color:#fff;}.win-mm .down-info{background-color:#3d3d3d;}.mt-mm .down-info{background-color:#4d1754;}.down-info h3{font-size:24px;}.down-info .down-compare{margin-top:20px;text-align:left;}.down-info .down-compare h4{font-size:18px;margin-bottom:10px;}.down-info .down-compare h4:before{display:inline-block;content:"";width:5px;height:17px;background-color:#fff;margin-right:10px;}.down-info .down-compare h4 span{font-size:24px;}.down-info .down-compare ul li{list-style:disc inside;font-size:14px;color:#d7d7d7;line-height:18px;}.down-info .down-compare ul.pros{min-height:72px;}.down-info .down-compare p{font-size:14px;color:#d7d7d7;line-height:18px;}.down-info .down-btn-wrap{min-height:82px;margin-top:20px;}.down-info .down-btn-wrap .btn{display:inline-block;width:70%;height:30px;line-height:30px;font-size:14px;color:#fff;}.down-info .down-btn-wrap .btn:hover{text-decoration:none;}.down-info .down-btn-wrap .downbtn{background-color:#6e6e6e;margin-top:45px;}.down-info .down-btn-wrap .downbtn:hover{background-color:#5b5b5b;}.down-info .down-btn-wrap .mmm-downbtn{background-color:#ff470f;margin-top:45px;}.down-info .down-btn-wrap .mmm-downbtn:hover{background-color:#eb3b06;}.down-close{position:absolute;display:block;width:30px;height:30px; padding-top:5px;cursor:pointer;top:0;right:0;}.down-close:hover{background-color:#f2f2f2;}.down-close i{position: relative;display:inline-block;width:2px; height:20px; background-color:#c7d3e7;transform:rotate(45deg);}.down-close i:before{position: absolute;display:inline-block;content:"";width:2px; height:20px; background-color:#c7d3e7;transform:rotate(90deg); top:0; left:0;}</style>',n='<div class="mm-downwrap"><div class="down-content-wrap"><p>Best Windows Movie Maker Alternative - MiniTool Movie Maker Is Recommended!</p><p>Works easier and much better!</p><div class="downlist clearfixed"><div class="col-2-1"><div class="mm mt-mm"><div class="down-info"><h3>MiniTool Movie Maker</h3><div class="down-compare"><h4><span>P</span>ros</h4><ul class="pros"><li>Free, ease-of-use, and no watermark.</li><li>Choices of transitions, and text effects.</li><li>Contrast or saturation or effects are adjustable.</li><li>Export movies to different file formats.</li></ul></div><div class="down-compare"><h4><span>C</span>ons</h4><p>It is beta version. Subscribe now, and you will receive the installation package quickly.</p></div><div class="down-btn-wrap"><a href="https://cdn2.minitool.com/?p=mm&e=mm-free" class="btn mmm-downbtn" data-position="WMM">Free Download</a></div></div></div></div><div class="col-2-1"><div class="mm win-mm"><div class="down-info"><h3>Windows Movie Maker</h3><div class="down-compare"><h4><span>P</span>ros</h4><ul class="pros"><li>Free.</li><li>Ease-of-use.</li><li>Make movie without watermark.</li></ul></div><div class="down-compare"><h4><span>C</span>ons</h4><ul><li>No contrast or saturation adjustments.</li><li>Effects aren\'t adjustable.</li></ul></div><div class="down-btn-wrap"><a href="https://www.partitionwizard.com/download/windows-movie-maker.exe" class="btn downbtn wmm-downbtn">Free Download</a></div></div></div></div></div><span class="down-close"><i></i></span></div></div>'
0===$(".downcss").length&&$("head").append(e),$("body").append(n)
var a=($(window).width()-$(".down-content-wrap").outerWidth())/2,i=($(window).height()-$(".down-content-wrap").outerHeight())/2
return $(".down-content-wrap").css({left:a,top:i}),$(".down-close").click(function(){$(".mm-downwrap").remove()}),!1}})})
