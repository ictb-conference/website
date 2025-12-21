var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var tme = 0;
var tot = "";
function tracVersion() {
     alert('trac.js http Version 5.0');
}
function jSleep(s){
        s=s*1000;
        var a=true;
        var n=new Date();
        var w;
        var sMS=n.getTime();
        while(a){
                w=new Date();
                wMS=w.getTime();
                if(wMS-sMS>s) a=false;
        }
}
function Querystring(qs) { // optionally pass a querystring to parse
    this.params = new Object()
    this.get=Querystring_get

    if (qs == null)
        qs=location.search.substring(1,location.search.length)
    if (qs.length == 0) return
    qs = qs.replace(/\+/g, ' ')
    qs = qs.replace(/&amp;/g, '&')
    var args = qs.split('&') // parse out name/value pairs separated via &
    for (var i=0;i<args.length;i++) {
        var value;
        var pair = args[i].split('=')
        var name = unescape(pair[0])

        if (pair.length == 2)
            value = unescape(pair[1])
        else
            value = name

        this.params[name] = value
    }
}
function Querystring_get(key, default_) {
        // This silly looking line changes UNDEFINED to NULL
        if (default_ == null) default_ = '';
        var value=this.params[key]
        if (value==null) value=default_;
        return value
}
function deleteCookie(name) {
        createCookie(name,"",-1);
}
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function getHost(sub) {
    if(sub == null || sub == "") { sub = 'aws'; } var domain   = 'predictiveresponse.net';
    var protocol = location.protocol;
    var host     = protocol + '//' + sub + '.' + domain;
    return(host);
}
function tracPredictive() {
   trackPredictive();
}
function Predictive() {
   trackPredictive();
}
function trackPredictive(sub) {
    console.log("Predictive Analytics version 5.0 installed");
    var sub  = sub;
    var pag  = 0;
    var host = getHost(sub);
    var url  = host + '/rtrac.php';
    var titl = document.title;
    var ref  = document.referrer;
    titl     = titl.replace(/&/g,"*");
    if (location.href.indexOf('?org') != -1) {
       curl = location.href.split('?');
       curl = curl[0];
    } else {
       curl1 = location.href.replace("&org","|");
       curl2 = curl1.split("|");
       curl  = curl2;
       curl3 = curl[0];
       curl  = curl3.replace(/&/g,"*");
       curl4 = curl.split("?utm_source");
       curl  = curl4[0];
       curl4 = curl.split("|utm_source");
       curl  = curl4[0];
    }
    curl4 = curl.split("?cutoff");
    curl  = curl4[0];
    curl4 = curl.split("*cutoff");
    curl  = curl4[0];

    var qs   = new Querystring();
    var lvl  = 3;
    var org  = qs.get('org');
    var con  = qs.get('con');
    var lea  = qs.get('lea');
    var ite  = qs.get('ite');
    var cam  = qs.get('cam');
    var sid  = qs.get('sid');
    var ctr  = qs.get('ctr');
    var nam  = 'cam_' + cam;
    var oli  = org + '|' + cam + '|' + lea;
    var sfi  = 'sfi_'    + sid;
    var uvi;
    var uvx;
    var orgz;
    var lidz;
    if (lea != "") {
       deleteCookie('lid');
       deleteCookie('lidz');
       createCookie('lid',lea,999);
       createCookie('lidz',lea,999);
    } else {
       lea  = readCookie('lidz');
       lidz = readCookie('lidz');
    }
    if(lea == null || lea == 0) {
       uvi = checkUserCookie();
       con = readCookie('_pa_converted');
    }
    else {
       uvi = readCookie('_pa_user');
       uvx = readCookie('_px_user');
       if(uvi != null) {
          // deleteCookie('_pa_user');
          createCookie('_px_user',uvi,999);
       }
    }
    if (org != "") {
       deleteCookie('orgz');
       createCookie('orgz',org,999);
    } else {
       org  = readCookie('orgz');
       orgz = readCookie('orgz');
    }
    //
    ses = checkSessionId();
    console.log("uvi=" + uvi +  " con=" + con + " uvx=" + uvx + " lea=" + lea + " org=" + org);
    trackerImage = new Image();
    trackerImage.src = url + '?org=' + org + '&lea=' + lea + '&ite=' + ite + '&lvl=' + --lvl + '&uvi=' + uvi + '&uvx=' + uvx + '&con=' + con + '&ctr=' + ctr + '&curl=' + curl + '&titl=' + titl + '&ref=' + ref + '&sid=' + ses;
    console.log(trackerImage.src);
    return curl;
}
function doRedirect() {
    if (location.href.indexOf('&timeout=')     != -1) {
       trackPredictiveTime(curl);
    }
    if (location.href.indexOf('?redirect=')    != -1) {
       trackPredictiveRedirect();
    }
    if (location.href.indexOf('&redirect=')    != -1) {
       trackPredictiveRedirect2();
    }
    if (location.href.indexOf('?redirect_np=') != -1) {
       trackPredictiveRedirectNP();
    }
    if (location.href.indexOf('&redirect_np=') != -1) {
       trackPredictiveRedirectNP2();
    }
    if (location.href.indexOf('?redirect_nx=') != -1) {
       trackPredictiveRedirectNP3();
    }
}
function trackPredictiveRedirect() {
    curl = location.href.split("?");
    curl[1] = curl[1].replace(/&amp;/g, '&');
    curl2 = curl[1].split("&");
    var par = "?" + curl2[1];
    for (i = 2; i < curl2.length; i++) {
       par = par + '&' + curl2[i];
    }
    var qs          = new Querystring();
    var newURL      = qs.get('redirect');
    redirect        = newURL + par;
    window.location = redirect;
}
function trackPredictiveRedirect2() {
    c0   = location.href.split("?");
    c0[1] = c0[1].replace(/&amp;/g, '&');
    c1 = c0[1].split("&redirect");
    c2 = c0[0] + '?' + c1[0];
    c3 = c1[1].split("&");
    par = "";
    for (i=1;i<c3.length;i++) {
       par = par + '&' + c3[i];
    }
    var qs          = new Querystring();
    var newURL      = qs.get('redirect');
    redirect        = newURL + '?' + c1[0] + par;
    window.location = redirect;
}
function trackPredictiveRedirectNP() {
    curl = location.href.split("?");
    curl[1] = curl[1].replace(/&amp;/g, '&');
    curl2 = curl[1].split("&");
    par = "";
    //
    par = "?" + curl2[1];
    for (i=1;i<curl2.length;i++) {
       par = par + '&' + curl2[i];
    }
    var qs          = new Querystring();
    var newURL      = qs.get('redirect_np');
    redirect        = newURL + par;
    window.location = redirect;
}
function trackPredictiveRedirectNP2() {
    c0   = location.href.split("?");
    c0[1] = c0[1].replace(/&amp;/g, '&');
    c1 = c0[1].split("&redirect_np=");
    redirect        = c1[1];
    window.location = redirect;
}
function trackPredictiveRedirectNP3() {
    c0   = location.href.split("?");
    c0[1] = c0[1].replace(/&amp;/g, '&');
    c1 = c0[1].split("redirect_nx=");
    c2 = c1[1].split("&");
    redirect        = c2[0];
    window.location = redirect;
}
function trackPredictiveTime(curl) {
    var interval = 5000;
    var pag  = 0;
    var host = getHost();
    var url  = host + '/ttrac.php';
    var qs   = new Querystring();
    var lvl  = 3;
    var timeout = qs.get('timeout');
    var org  = qs.get('org');
    var lea  = qs.get('lea');
    var ite  = qs.get('ite');
    var cam  = qs.get('cam');
    var sid  = qs.get('sid');
    var ctr  = qs.get('ctr');
    var nam  = 'cam_' + cam;
    var oli  = org + '|' + cam + '|' + lea;
    var sfi  = 'sfi_'    + sid;
    tot =  url + '?org=' + org  + '&lea=' + lea + '&ite=' + ite + '&lvl=' + --lvl + '&ctr=' + ctr + '&curl=' + curl;
    tme = 0;
    timeout = 5000; // initial 5 sec timeout
    /*
    tme = 0;
    if (timeout == undefined) { timeout = 18001; }
    else { timeout = (timeout * 1000) + 1; }
    if (timeout > 600000) { timeout = 600001; }
    delta = setInterval("sendHeartBeat()", interval);
    setTimeout ('clearInterval(delta)', timeout);
    */
    setTimeout ('sendHeartBeat()', timeout);

}
function sendHeartBeat() {
    tme = tme + 1;
    var  top = (tme * 5);
    var  tote = tot + '&seq=' + tme + '&top=' + top;
    //alert('tote=' + tote);
    //alert('top=' + top + ' timeout=' + timeout);
    dummyimage = new Image();
    dummyimage.src = tote;
    if (top < 180)
       timeout = 5000;
    else if (top < 600)
       timeout = 15000;
    else if (top < 1800)
       timeout = 30000;
    else if (top <= 3600)
       timeout = 60000;
    else if (top > 3600)
       timeout = 120000;
    setTimeout ('sendHeartBeat()', timeout);
    //alert(' ' + tme + '-' + top + '-' + timeout);
    //alert(timeout);
}
function checkUserCookie() {
    // console.log("checkUserCookie");
    var timestamp = Math.round((new Date()).getTime() / 1000);
    var length = 9;
    var cookie_pa_user = readCookie('_pa_user');
    if (cookie_pa_user != "" && cookie_pa_user != null) {
      // do cookie exists stuff
    }
    else {
      // do cookie doesn't exist stuff;
      var timestamp = Math.round((new Date()).getTime() / 1000);
      var randomString = function(length) {
         var text = "";
         var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
         for(var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
         }
         return text;
      }
      cookie_pa_user = randomString(length) + timestamp
      if (cookie_pa_user != "" && cookie_pa_user != null) {
         //console.log(" creating : " . cookie_pa_user);
         createCookie('_pa_user', cookie_pa_user, 730);
      }
   }
   //console.log("_pa_user = " + cookie_pa_user);
   return(cookie_pa_user);
}
function checkSessionId() {
    var timestamp = Math.round((new Date()).getTime() / 1000);
    var _pa_sessionId = localStorage.getItem("_pa_sessionId");
    if (localStorage.getItem("_pa_sessionId") != null) {
      _pa_session_id = localStorage.sessionId;
      var timeDiff = Number(timestamp) - Number(_pa_sessionId);
      if(Number(timeDiff) > 86400) {
         localStorage._pa_sessionId = timestamp;
      }
    }
    else {
      localStorage._pa_sessionId = timestamp;
    }
   return(_pa_sessionId);
}

}
/*
     FILE ARCHIVED ON 06:06:42 Nov 28, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:58:09 Dec 16, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.446
  exclusion.robots: 0.013
  exclusion.robots.policy: 0.005
  esindex: 0.007
  cdx.remote: 31.943
  LoadShardBlock: 599.231 (6)
  PetaboxLoader3.resolve: 119.969 (3)
  PetaboxLoader3.datanode: 541.239 (7)
  load_resource: 86.721
*/