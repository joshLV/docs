clouda.define("mbaas/app",function(){function o(){return clouda.RUNTIME===clouda.RUNTIMES.KUANG&&clouda.PLATFORM===clouda.PLATFORMS.IOS&&"function"==typeof BLightApp.addLAPush?!0:!1}function a(o,a,i){var u={appid:i.appid,statis_ext:{src:"clouda"},push_action:a};i.nonce&&(u.nonce=i.nonce),i.csrftoken&&(u.csrftoken=i.csrftoken),i.tag&&(u.tags=[i.tag]);var c={push_params:u},e=function(){i.onsuccess(1)},t=function(o){i.onfail(o)};return n(o,JSON.stringify(c),e,t),!1}var i=clouda.lightapp,u=clouda.mbaas.app={},n=(clouda.mbaas||{},clouda.DelegateClass,clouda.kuangForReady,clouda.runtimeError,clouda.installPlugin,clouda.cloudaBLight),c=clouda.ErrCode,e=clouda.lib.utils.stat,t=function(o,a){var i=document.createElement("script");i.setAttribute("src",o),document.head.appendChild(i),i.onload=function(){a&&a(i)}};u.followSite=function(u,s){if(u){var d="subscribeCallback"+ +new Date;if(window[d]=function(o){"undefined"!=typeof o.error_code&&0!==o.error_code?s.onfail(o):s.onsuccess(o)},clouda.PLATFORM===clouda.PLATFORMS.IOS){if(clouda.RUNTIME===clouda.RUNTIMES.KUANG&&clouda.RUNTIME_VERSION>="6.8"){e({api:"app.followSite",runtime:"kuang"});var l=function(o){s.onsuccess(o)},p=function(o){s.onfail(o)};return s.appid=u,void n("followZhida",JSON.stringify(s),l,p)}return o()?(e({api:"app.followSite",runtime:"kuang"}),s.appid=u,void a("addLAPush","subscribe",s)):navigator.userAgent.match(/baiduboxapp\/([\d.-_]*)/i)&&clouda.RUNTIME!==clouda.RUNTIMES.KUANG?clouda.RUNTIME_VERSION<"6.1"?(s.onsuccess&&"function"==typeof s.onsuccess&&s.onsuccess(0),void clouda.lib.moplus.openApp(!1,u,{tip:"请使用最新版【手机百度】\n订阅",startDownload:1,platform:"ios"})):clouda.RUNTIME_VERSION>="6.1"&&clouda.RUNTIME_VERSION<"6.8"?void clouda.lib.moplus.openApp(!0,u):(e({api:"app.followSite",runtime:"web"}),s.appid=u,void t("https://pim.baidu.com/rest/2.0/im/zhidahao?method=subscribe&hsc=1&appid="+s.appid+"&sponsor=4&callback="+d,function(o){document.head.removeChild(o)})):clouda.RUNTIME===clouda.RUNTIMES.KUANG?(s.onsuccess&&"function"==typeof s.onsuccess&&s.onsuccess(0),void clouda.lib.moplus.openApp(!1,u,{tip:"请使用最新版【手机百度】\n订阅",startDownload:1,platform:"ios"})):(e({api:"app.followSite",runtime:"web"}),s.appid=u,void t("https://pim.baidu.com/rest/2.0/im/zhidahao?method=subscribe&hsc=1&appid="+s.appid+"&sponsor=4&callback="+d,function(o){document.head.removeChild(o)}))}if(clouda.RUNTIME===clouda.RUNTIMES.KUANG){if(clouda.RUNTIME_VERSION<"5.3")return s.onsuccess&&"function"==typeof s.onsuccess&&s.onsuccess(0),void clouda.lib.moplus.openApp(!1,u,{tip:"请使用最新版【手机百度】\n订阅",startDownload:1});if(clouda.RUNTIME_VERSION>="6.8"){e({api:"app.followSite",runtime:"kuang"});var l=function(o){s.onsuccess(o)},p=function(o){s.onfail(o)};return s.appid=u,void n("followZhida",JSON.stringify(s),l,p)}return e({api:"app.followSite",runtime:"kuang"}),n("followSite",function(){s.onsuccess(clouda.STATUS.SUCCESS)},s.onfail),!1}if("undefined"!=typeof BLightApp||navigator.userAgent.match(/baiduboxapp\/([\d.-_]*)/i))return clouda.RUNTIME_VERSION>="5.3"&&clouda.RUNTIME_VERSION<"6.8"?void clouda.lib.moplus.openApp(!0,u):clouda.RUNTIME_VERSION>="6.8"?(e({api:"app.followSite",runtime:"web"}),s.appid=u,void t("https://pim.baidu.com/rest/2.0/im/zhidahao?method=subscribe&hsc=1&appid="+u+"&sponsor=4&callback="+d,function(o){document.head.removeChild(o)})):(s.onsuccess&&"function"==typeof s.onsuccess&&s.onsuccess(0),void clouda.lib.moplus.openApp(!1,u,{tip:"请使用最新版【手机百度】\n订阅",startDownload:1}));if(clouda.RUNTIME===clouda.RUNTIMES.LIGHTSDK){e({api:"app.followSite",runtime:"o2o"});var r={appid:u||clouda.lightapp.appid,channel:s.src||"clouda",addShortcut:!1};return void clouda.lightsdk(s.onsuccess,s.onfail,"device.push","followSite",r)}if("undefined"!=typeof uix_bridge){e({api:"app.followSite",runtime:"uix"});var r={appid:u},f=clouda.lib.utils.regcallback(s.onsuccess,s.onfail);return void uix_bridge.followSite(JSON.stringify(r),f.s,f.f)}clouda.RUNTIME===clouda.RUNTIMES.NUWA&&clouda.NUWA_VERSION>="2.6"?(e({api:"app.followSite",runtime:"nuwa"}),nuwa&&nuwa.am&&"function"==typeof nuwa.am.subscribe?nuwa.am.subscribe(u,function(){s.onsuccess(clouda.STATUS.SUCCESS)},function(o){i.error(c.APP_ERROR,o,s)}):document.addEventListener("runtimeready",function(){nuwa.am.subscribe(u,function(){s.onsuccess(clouda.STATUS.SUCCESS)},function(o){i.error(c.APP_ERROR,o,s)})})):(e({api:"app.followSite",runtime:"web"}),s.appid=u,t("https://pim.baidu.com/rest/2.0/im/zhidahao?method=subscribe&hsc=1&appid="+s.appid+"&sponsor=4&callback="+d,function(o){document.head.removeChild(o)}))}},u.checkFollow=function(o,a){return o?clouda.RUNTIME===clouda.RUNTIMES.KUANG?(e({api:"app.checkFollow",runtime:"kuang"}),n("queryWzStatus",function(o){a.onsuccess(parseInt(o.status,10))},a.onfail),!1):void(clouda.RUNTIME===clouda.RUNTIMES.NUWA&&(e({api:"app.checkFollow",runtime:"nuwa"}),nuwa&&nuwa.am&&"function"==typeof nuwa.am.hasSubscribed?nuwa.am.hasSubscribed(o,function(o){a.onsuccess(o?1:0)},function(o){i.error(c.APP_ERROR,o,a)}):document.addEventListener("runtimeready",function(){nuwa.am.hasSubscribed(o,function(o){a.onsuccess(o?1:0)},function(o){i.error(c.APP_ERROR,o,a)})}))):void i.error(c.UNKNOW_INPUT,c.UNKNOW_INPUT,a)}});
;clouda.define("mbaas/socialshare",function(){function e(e){c({api:"socialshare.callShare",runtime:"web"});var n=clouda.lightInit.ak||clouda.lightapp.ak,t=document.getElementsByClassName("bdSharePopup");if(1==e.hide){for(var d,u=0,s=t.length;s>u;u++)d=t[u],"block"==d.style.display&&(d.style.display="none");return!1}var m=function(e){var i=e.parentNode;i&&i.removeChild(e)};if(!e.content)return!1;for(var p=t.length,h=p-1;h>=0;h--)t[h]&&m(t[h]);e.linkUrl=e.linkUrl?e.linkUrl:location.href,e.linkUrl=a(e.linkUrl),e.linkUrl=encodeURIComponent(e.linkUrl),e.imageUrl=e.imageUrl?encodeURIComponent(e.imageUrl):"";var f={afterRender:function(){console.log("afterRender exec...")},title:e.title||document.title,client_id:n,dom_id:"hidden_btn",content:e.content,theme:"native",appid:e.appid?e.appid:"",animate:!1,url:e.linkUrl,pic_url:e.imageUrl||e.iconUrl,u:e.u};if(document.querySelector("#hidden_btn"))return r=document.getElementById("hidden_btn"),void socShare.init(f,function(){r.dispatchEvent(l)});var g;g="http:"===window.location.protocol?"http://apps.bdimg.com":"https://openapi.baidu.com";var U=3;i(g+"/cloudaapi/socialshare-api/share.min.js?a="+U,function(){var i=["weixin_friend","weixin_timeline","qqfriend","sinaweibo","qqweibo","qqdenglu","renren","sms","email"];if(e.mediaType&&"all"!==e.mediaType){for(var a=!1,t=0,c=i.length;c>t;t++)if(i[t]==e.mediaType){a=!0;break}if(a)return void("weixin_friend"==e.mediaType||"weixin_timeline"==e.mediaType||"qqfriend"==e.mediaType?clouda.lib.moplus.openApp(!0,f.appid):"sinaweibo"==e.mediaType||"qqweibo"==e.mediaType||"renren"==e.mediaType?location.href="http://openapi.baidu.com/social/widget/share?method=share&media_type="+e.mediaType+"&client_id="+n+"&url="+e.linkUrl+"&pic_url="+e.imageUrl+"&content="+encodeURIComponent(e.content)+"&u="+e.linkUrl:"qqdenglu"==e.mediaType?location.href=socShare.acc.getQQHref(f):("sms"==e.mediaType||"email"==e.mediaType)&&socShare.acc.getShortLink({client_id:n,url:e.linkUrl},function(){var i=socShare.acc.shortLinks[e.mediaType];location.href="sms"==e.mediaType?socShare.acc.getSMSHref(e.content,i):socShare.acc.getEmailHref(e.content,i)}))}o=!0,document.querySelector("#hidden_btn")?console.log("js 加载失败"):(r=document.createElement("div"),r.id="hidden_btn",r.style.display="none",document.body.appendChild(r),socShare.init(f,function(){r.dispatchEvent(l)}))})}function i(e,i){var a,n,t,r=document.head||document.getElementsByTagName("head")[0]||document.documentElement;"object"==typeof e&&(n=e,e=void 0),t=n||{},e=e||t.url,i=i||t.success,a=document.createElement("script"),a.id="share_script",a.async=t.async||!1,a.type="text/javascript",a.charset=t.charset?t.charset:"utf-8",a.src=e,r.insertBefore(a,r.firstChild),"function"==typeof i&&(document.addEventListener?a.addEventListener("load",i,!1):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&(a.onreadystatechange=null,i())})}function a(e){var i=e,a=e.match(/^(http:\/\/|https:\/\/)?(.+\?)/i);if(a){for(var n=e.substring(a[0].length),t=n.split("&"),r=[],l=0;l<t.length;l++)t[l].match(/^bd_/)||r.push(t[l]);i=a[0]+r.join("&")}return i}{var n=(clouda.mbaas||{},clouda.lightapp),t=clouda.mbaas.socialshare={};clouda.DelegateClass,clouda.kuangForReady,clouda.runtimeError,clouda.installPlugin,clouda.cloudaBLight}t.loadFlag=1;var r=null,l=document.createEvent("HTMLEvents");l.initEvent("click",!1,!1),l.eventType="message";var o=!1,c=clouda.lib.utils.stat;return t.callShare=function(i){if(clouda.RUNTIME===clouda.RUNTIMES.KUANG&&BLightApp&&"function"==typeof BLightApp.callShare||navigator.userAgent.match(/baiduboxapp\/([\d+.]+)/)&&clouda.RUNTIME_VERSION>="5.3.5"){if(1==i.hide)return!1;if(!i.onsuccess||!i.onfail||"function"!=typeof i.onsuccess||"function"!=typeof i.onfail)return n.error(ErrCode.UNKNOW_INPUT,ErrCode.UNKNOW_INPUT,i),!1;if(!i.content)return n.error(ErrCode.UNKNOW_INPUT,ErrCode.UNKNOW_INPUT,i),!1;if(!i.mediaType)return n.error(ErrCode.UNKNOW_INPUT,ErrCode.UNKNOW_INPUT,i),!1;c({api:"socialshare.callShare",runtime:"kuang"}),i.title||(i.title="来自手机百度"),i.linkUrl||(i.linkUrl=location.href),i.linkUrl=a(i.linkUrl);var t=clouda.lib.utils.regcallback(i.onsuccess,i.onfail);if(clouda.RUNTIME===clouda.RUNTIMES.KUANG)BLightApp.callShare(JSON.stringify(i),t.s,t.f);else if("undefined"!=typeof Bdbox_android_utils&&"undefined"!=typeof Bdbox_android_utils.callShare)Bdbox_android_utils.callShare(JSON.stringify(i),t.s,t.f);else if(clouda.PLATFORM===clouda.PLATFORMS.IOS){var r="baiduboxapp://callShare?options="+encodeURIComponent(JSON.stringify(i))+"&errorcallback="+t.f+"&successcallback="+t.s;location.href=r}return!1}if(clouda.RUNTIME===clouda.RUNTIMES.LIGHTSDK){c({api:"socialshare.callShare",runtime:"o2o"});var l=i.mediaType||"all",o={all:0,sinaweibo:1,weixin_friend:2,weixin_timeline:3,sms:4},d={title:i.title||document.title,url:a(i.linkUrl||location.href),content:i.content||"这个直达号很赞，马上用百度地图体验一下吧。",img_url:i.imageUrl,weixin_description:i.title||"这个直达号很赞，马上用百度地图体验一下吧。",thumb_img_url:i.iconUrl||i.imageUrl,weixin_send_url:!0,fromSmartBar:!0};return d.weibo_title=d.weixin_title=d.weixin_timeline_title=i.title,d.share_type=o[l]||0,void clouda.lightsdk(i.onsuccess,i.onfail,"device.share","directShare",d)}if("undefined"!=typeof uix_bridge){c({api:"socialshare.callShare",runtime:"uix"});var t=clouda.lib.utils.regcallback(i.onsuccess,i.onfail);return void uix_bridge.callShare(JSON.stringify(i),t.s,t.f)}if(clouda.RUNTIME===clouda.RUNTIMES.NUWA&&clouda.NUWA_VERSION>="2.6"){{clouda.lightInit.ak||clouda.lightapp.ak}0!==i.menumode&&(i.menumode=1),i.linkUrl=i.linkUrl||location.href,i.imageUrl=i.imageUrl||"",i.mediaType=i.mediaType||"all",c({api:"socialshare.callShare",runtime:"nuwa"});var u=function(){i.onsuccess(clouda.STATUS.SUCCESS)},s=function(){n.error(ErrCode.BTY_ERR,nativeErr,i)};return nuwa&&nuwa.sm&&"function"==typeof nuwa.sm.share?nuwa.sm.share(u,s,JSON.stringify(i)):document.addEventListener("runtimeready",function(){nuwa.sm.share(u,s,JSON.stringify(i))}),!1}return e(i),!1},t});