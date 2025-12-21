var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*1638087727,,JIT Construction: v1004772819,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
try {(function(a,b,c,d){var e=a._fbq||(a._fbq=[]);if(e.push!==Array.prototype.push)return;var f=/^\d+$/,g="https://web.archive.org/web/20211128083201/https://www.facebook.com/tr/",h={},i=[],j=c.href,k=b.referrer,l=a.top!==a;function m(c){var d=[];for(var a=0,b=c.length;a<b;a++)d.push(c[a][0]+"="+encodeURIComponent(c[a][1]));return d.join("&")}function n(a,b){var c=function c(){a.detachEvent?a.detachEvent("onload",c):a.onload=null,b()};a.attachEvent?a.attachEvent("onload",c):a.onload=c}function o(c,d){var e="fb"+Math.random().toString().replace(".",""),f=b.createElement("form");f.method="post";f.action=c;f.target=e;f.acceptCharset="utf-8";f.style.display="none";c=!!(a.attachEvent&&!a.addEventListener);c=c?'<iframe name="'+e+'">':"iframe";var g=b.createElement(c);g.src="javascript:false";g.id=e;g.name=e;f.appendChild(g);n(g,function(){for(var a=0,c=d.length;a<c;a++){var e=b.createElement("input");e.name=d[a][0];e.value=d[a][1];f.appendChild(e)}n(g,function(){f.parentNode.removeChild(f)});f.submit()});b.body.appendChild(f)}h.addPixelId=function(a){i.push(a)};h.track=function(b,c){var d=typeof b;if(d!=="string"&&d!=="number")return!1;if(f.test(b)){p(null,b,c);return!0}for(var d=0,a=i.length;d<a;d++)p(i[d],b,c);return i.length>0};function p(a,b,c){var d=[];d.push(["id",a]);d.push(["ev",b]);d.push(["dl",j]);d.push(["rl",k]);d.push(["if",l]);d.push(["ts",new Date().valueOf()]);if(c&&typeof c==="object")for(var e in c)if(Object.prototype.hasOwnProperty.call(c,e)){a=c[e];b=a===null?"null":typeof a;b in{number:1,string:1,"boolean":1}?d.push(["cd["+encodeURIComponent(e)+"]",a]):b==="object"&&(a=typeof JSON==="undefined"?String(a):JSON.stringify(a),d.push(["cd["+encodeURIComponent(e)+"]",a]))}b=m(d);if(2048>(g+"?"+b).length){a=new Image();a.src=g+"?"+b}else o(g,d)}var q=function(b){if(Object.prototype.toString.call(b)!=="[object Array]")return!1;var c=b.shift();if(!c)return!1;c=h[c];if(typeof c!=="function")return!1;if(a._fbds){var d=a._fbds.pixelId;f.test(d)&&(i.push(d),delete a._fbds.pixelId)}return c.apply(h,b)};for(var r=0,s=e.length;r<s;++r)q(e[r]);e.push=q;if(e.disablePushState===!0)return;if(!d.pushState||!d.replaceState)return;r=function(){k=j,j=c.href,e.push(["track","PixelInitialized"])};s=function(a,b,c){var d=a[b];a[b]=function(){var a=d.apply(this,arguments);c.apply(this,arguments);return a}};s(d,"pushState",r);s(d,"replaceState",r);a.addEventListener("popstate",r,!1)})(window,document,location,history);} catch (e) {var i = new Image();i.crossOrigin = 'anonymous';i.dataset.testid = 'fbSDKErrorReport';i.src='https://web.archive.org/web/20211128083201/https://www.facebook.com/platform/scribe_endpoint.php/?c=jssdk_error&m='+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script||"fbds.js")+'","stack":"'+(e.stackTrace||e.stack)+'","revision":"1004772819","namespace":"FB","message":"'+e.message+'"}}');document.body.appendChild(i);}
}
/*
     FILE ARCHIVED ON 08:32:01 Nov 28, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:58:21 Dec 16, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.778
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.007
  esindex: 0.01
  cdx.remote: 14.759
  LoadShardBlock: 307.276 (6)
  PetaboxLoader3.datanode: 210.752 (7)
  PetaboxLoader3.resolve: 194.036 (3)
  load_resource: 164.822
*/