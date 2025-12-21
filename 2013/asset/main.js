var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
( function($) {

   

   jQuery(document).ready(function(){

    var tab = gup('tab');

    if (tab.length > 0) {

      window.location.hash = tab;

      jQuery('.'+tab).click();

    }

    

    var mobileSubMenu = jQuery("#main #sidebar-primary .nav-menu .current-menu-item .sub-menu").html();

    jQuery("#footer .wrap #mobile-submenu").html(mobileSubMenu);

    jQuery("#footer .wrap #mobile-submenu li li").css("display", "none");

	

	

    jQuery( ".shortcode-accordion" ).accordion({  

	  collapsible: true, 

	  autoHeight: false, 

	  active: false,

	  header: 'h4'

	});

	

	jQuery( ".shortcode-accordion" ).on( "accordionchange", function( event, ui ) {

		  if(ui.newHeader.length>0 && !ui.newHeader.is('h3')) jQuery("html,body").animate({scrollTop: ui.newHeader.offset().top-86});} );

	jQuery( ".accordion" ).on( "accordionchange", function( event, ui ) {

		  if(ui.newHeader.length>0 && !ui.newHeader.is('h3')) jQuery("html,body").animate({scrollTop: ui.newHeader.offset().top-86});} );

	  

   jQuery(".shortcode-accordion a.mailto-link").on('click', function() {

	   if(jQuery(this).parent().parent().hasClass('ui-state-active')) {

		   window.location = jQuery(this).attr('href');

		   return false;

	   }

   });

   

});

    

/* SEARCH

----------------------------------------------------------------------------------*/

      

   function gup( varname ) {

      varname = varname.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");

      var regexS = "[\\?&]"+varname+"=([^&#]*)";

      var regex = new RegExp( regexS );

      var results = regex.exec( window.location.href );

      if( results == null ) return ""; else return results[1];

    }  

      

   jQuery(function (){

      var CookieName = 'GoogleSearchOption';

      var searchType = 'local';

      

      //set Default cookie

      if( readCookie( CookieName ) == 'undefined' ){

            createCookie( CookieName, searchType );

      }

      

      var searchOption = readCookie( CookieName );

      

      switchSearch( searchOption );

      



      jQuery("#search-selector li").on( 'click', function(e) {

         if( jQuery(this).hasClass('global') ){

            searchType = 'global';

         } else {

            searchType = 'local';

         }

         

         createCookie( CookieName, searchType );

         switchSearch( searchType );

      });

      

      jQuery('#mobile-search').click(function(){

         jQuery('#google-search').slideToggle('fast', function(){

            jQuery(this).toggleClass('hide');

         });

         

         if( jQuery(this).find('input').attr('value') == 'Search' ) {

            jQuery(this).find('input').attr('value', 'Hide Search');

         }

         else {

            jQuery(this).find('input').attr('value', 'Search');

         }

      });

      

     

      

      function switchSearch( which ){

         

         var local = jQuery('#cse-search-form');

         var global = jQuery('#cse-search-form-external');

         var radios = jQuery('#search-selector li');

         

         if( which == 'local'){

            local.show();

            radios.removeClass('checked').filter('.local').addClass('checked');

            global.hide();

            return

         }

         if( which == 'global'){

            global.show();

            radios.removeClass('checked').filter('.global').addClass('checked');

            local.hide();

            return

         }

      }

   }); 



/* EQUALISE MAIN COLUMN WITH SIDEBAR

----------------------------------------------------------------------------------*/

   jQuery(function (){

     equaliseHeights();

      jQuery(window).bind('resize', jQuery.throttle( 100, function(){

      equaliseHeights();

      }));

   });



/* HOMEPAGE

----------------------------------------------------------------------------------*/   

jQuery(function(){

   

   resizeFooterToBrowser();

   //jQuery.fn.OriginalFooterHeight = jQuery('#footer').height();

   

   jQuery(window).bind('scroll resize click', jQuery.throttle( 100, function(){

      resizeFooterToBrowser();

   }));

   

   

});



/* NAVIGATION ROLLOVER

----------------------------------------------------------------------------------*/ 

//requires hoverIntent.js  

jQuery(function(){

	jQuery('ul.sub-menu').each(function() {

		jQuery(this).parent().addClass('has-dropdown');

	});

	jQuery('#menu-main-menu > .has-dropdown').hoverIntent( navRollOver, function(){} );

	jQuery('#sidebar-primary').hoverIntent( function(){}, sideBarOut);

	

});



function navRollOver(e) {

	if(jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-page-ancestor')) return false;

	else if(!jQuery(this).hasClass('dropped-down') && (!jQuery(this).hasClass('current-menu-item'))) {

		jQuery(this).find('ul:first').slideDown();

    jQuery('.dropped-down:not(.current-menu-parent) > ul').slideUp();

    jQuery('.dropped-down').removeClass('dropped-down');

		jQuery(this).addClass('dropped-down');

	}

}

function sideBarOut(e) {

	jQuery('.dropped-down:not(.current-menu-parent) > ul').slideUp(function() {

		jQuery('.dropped-down').removeClass('dropped-down')

	});

}



/* MOBILISATION

----------------------------------------------------------------------------------*/

jQuery(function (){

     menuPrimaryInit();

     mobileNavMenu();

     mobileBodyClass();

     removeFancybox(); //unbind fb if <=480

     

      jQuery(window).bind('scroll resize', jQuery.throttle( 500, function(){

       menuPrimaryResponse();

       mobileBodyClass();

       

      }));

    jQuery('.w3c480 #google-search, .ie480 #google-search').addClass('hide');

}); 



   createExternalLinks();



/* 

----------------------------------------------------------------------------------*/

   

   jQuery( function(){

      jQuery('.clickable').bind('click', function(){

         var link = jQuery(this).find('a').attr('href');

         window.location.href = link;

      });

      

   });





   // Contact page

    jQuery('.show-content').bind('click', function( e ){

            

            var self = jQuery(this);

            var originalText = staticViewMore();

            

            if( self.prev().is(':hidden') ){

               self.toggleClass('less').prev().slideDown('fast');

               self.find('a').html( 'less' );

            } else {

               self.toggleClass('less').prev().slideUp('fast');

               self.find('a').html( originalText );

            }

            e.preventDefault();

   });



   





/*  TAXONOMY PULLDOWN

----------------------------------------------------------------------------------*/

   

   jQuery(function (){  

   

     jQuery('.taxonomy-pull-down').change(function(){

         var slug = jQuery(this).val();

         

         jQuery('.ui-accordion-header').hide();

         

         jQuery('.ui-accordion-header a').each(function(){

            

            var $this = jQuery( this );

            if( $this.hasClass( slug ) ) {

               $this.parent().show();

               jQuery('.accordion-content-active').removeAttr('style').hide().removeClass();

            }

            

            if( slug == 'resource_type' ){

               jQuery('.ui-accordion-header').show();

               jQuery('.accordion-content-active').removeAttr('style').hide().removeClass();

            }

            

         })

         

      });

   });





} ) ( jQuery );







/* HELPER FUNCTIONS

----------------------------------------------------------------------------------*/



// remembers the state of the dropdown buttons when the page loads.

function staticViewMore() {

    if ( typeof window.staticViewMore.dropdown == 'undefined' ) {

        window.staticViewMore.dropdown = jQuery('.show-content a')[0].text;

    }

    return window.staticViewMore.dropdown;

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



function eraseCookie(name) {

	createCookie(name,"",-1);

}



function resizeFooterToBrowser(){



if( jQuery('#container').height() < jQuery(window).height() ){

     //jQuery('#footer').resizeToBrowser();

  }

  

  jQuery('#footer-pattern').width( jQuery(window).width() - jQuery('#container').width() );

  

}



/**

 * menuPrimaryInit

 * This sets up the menu on the sidebar so it can be shown/hidden when

 * the user resizes the browser. For some weird reason it elimates classes on the 

 * same level when the id is changed.

 */

function menuPrimaryInit(){

   

   jQuery('#menu-primary')

                           .clone()

                           .find("ul").attr( 'id',function(i,id){

                                    return id+"-cloned"; 

                            })

                           .appendTo('#placeholder')

                           .wrap('<div id="menu-primary-cloned"/>')

                           .wrap('<div class="sidebar-inner"/>')

                           .hide();

                           

   jQuery('#menu-primary-items-cloned li').each(function(){

      var $this = jQuery(this);

      var theId = $this.attr('id');

      $this.attr( 'id' , theId + '-cloned');

   });                           

                           

}



/**

 * menuPrimaryResponse

 * This move the menu from main content area to the primary sidebar

 * this just toggles the visibility of the items

 */

function menuPrimaryResponse(){

   

   if( jQuery(window).width() <= 840 ){

      jQuery('#menu-primary .menu').css('visibility','hidden');

      jQuery('#menu-primary-items-cloned').show();

   } 

   else {

      jQuery('#menu-primary .menu').css('visibility','visible');

      jQuery('#menu-primary-items-cloned').hide();

   }

   

   

   

   if( jQuery('#menu-primary-items-cloned').width() + 5 < window.menuPrimaryWidth ){

      

      jQuery('#menu-primary-items-cloned').addClass('compact').removeClass('expand');

      

   } else {

      

      jQuery('#menu-primary-items-cloned').addClass('expand').removeClass('compact');

      

   }

}

/**

 * mobileBodyClass

 * 

 * Sets a class on the body for media queries.

 * 

 * @return String

 **/

function mobileBodyClass(){

   

   if( jQuery('html').hasClass('oldie') ){

      var $body = jQuery('html.oldie body');

      var b = 'ie';

   } 

   else {

      var $body = jQuery('html body');

      var b = 'w3c';

   }

   

   $window = jQuery(window);

   

   if( $window.width() <= 480 ){

      $body.removeClass(b + 900).removeClass(b + 640).addClass(b + 480);

   }

   

   if($window.width() >= 480 && $window.width() <= 640 ){

      $body.removeClass(b + 480).removeClass(b + 900).addClass(b + 640);

   }

   if($window.width() >= 640 && $window.width() <= 900 ){

      $body.removeClass(b + 480).removeClass(b + 640).addClass(b + 900);

   }

   if($window.width() >= 900 ){

      $body.removeClass(b + 480).removeClass(b + 640).removeClass(b + 900);

   }

   

}



function equaliseHeights(){

      var $sidebar  = jQuery('#sidebar-primary');

      var $content  = jQuery('#content');

      var $main  = jQuery('#main');

      

      var $footerLastWidget = jQuery('#footer .widget-last');

      var $footerFirstWidget = jQuery('#footer .widget-first');

      var $sidebarFooter = jQuery('#sidebar-footer');

      

      // equalise the main columns

      if( $sidebar.height() >= $content.height() ){

         $content.css({'minHeight' : $main.pixels('height')});

      } 

      

}



function mobileNavMenu(){

   

   //create div

   jQuery('#header .wrap')

      .after(jQuery('<div id="mobile-menu"><div class="wrap" /></div>') )

   

   // make select elements

   jQuery("<select id='dd-main-menu' class='mobile-interactive-element'/>").appendTo( jQuery('#mobile-menu .wrap') );

   jQuery("<select id='dd-quick-menu' class='mobile-interactive-element'/>").appendTo( jQuery('#mobile-menu .wrap') );



   // make first option

   //makeFirstOption( jQuery('#dd-main-menu'), 'Go to page...' );

   makeFirstOption( jQuery('#dd-main-menu'), 'Menu' );

   makeFirstOption( jQuery('#dd-quick-menu'), 'Quick Links...' );



   // copy elements from menus into the mobile menu

   

   makeOptions( jQuery("#menu-main-menu.menu ul.sub-menu li a"), jQuery('#mobile-menu #dd-main-menu') );

  

   makeOptions( jQuery("#menu-quick-links a"), jQuery('#mobile-menu #dd-quick-menu') );

   

   // attach the change behaviour

   jQuery("#mobile-menu select").bind( 'change', function() {

        window.location = jQuery(this).find("option:selected").val();

   });

   

   var homeIntro = jQuery('.home-intro').html();

   var socialMedia = jQuery('#richetext-3 .widget_richtext_content').html();

   

   jQuery('#text-5 .textwidget').append(homeIntro);

   jQuery('#mobile-social-media-placeholder').append(socialMedia);

}



function makeOptions( $selectorFilter, $appendToElement ){

   

   $selectorFilter.each(function() {

      

      var self = jQuery(this);

      var parent = self.parent();

      var isSelected;

      

      if( parent.hasClass('current-menu-item') || parent.hasClass('current-page-ancestor') ){

       isSelected = 'selected';

      }

      

      jQuery("<option />", {

         "value"   : self.attr("href"),

         "text"    : self.text(),

         "selected" : isSelected

      }).appendTo( $appendToElement );

   });

}



function makeFirstOption( $appendToParent, parentText ){

    jQuery("<option />", {

      "selected": "selected",

      "value"   : "",

      "text"    : parentText

   }).appendTo( $appendToParent );

}



/**

 *  createExternalLinks

 *  

 *  Checks the content for external links and adds the attribute target="blank"

 *  if true

 *  

 *  @return null

 *  

 */

function createExternalLinks() {

   jQuery('#content .entry-content a').filter( function() {

	    return this.hostname && this.hostname !== location.hostname;

	  }).attr("target", "_blank");

}





/**

 

 */

function removeFancybox() {

   if( jQuery('.w3c480 .fancybox, ie480 .fancybox').length > 0  ){

      jQuery('.fancybox').unbind('click.fb')

               .removeClass('fancybox')

                  .addClass('nofancybox');

                     return false;

   }

}



// Copy a value to clipboard.

function copyToClipboard(content) {

  var aux = document.createElement("input");

  aux.setAttribute("value", content);

  document.body.appendChild(aux);

  aux.select();

  document.execCommand("copy");

  document.body.removeChild(aux);

}



/* PLUGINS

----------------------------------------------------------------------------------*/

jQuery.fn.extend({
  pixels: function(property) {
    return parseInt(this.css(property).slice(0,-2));
  },
  resizeToBrowser: function() {
    var h =  jQuery(window).height() - this.offset().top;
    this.height(h);
  }
});

/*

 * jQuery throttle / debounce - v1.1 - 3/7/2010

 * http://benalman.com/projects/jquery-throttle-debounce-plugin/

 * 

 * Copyright (c) 2010 "Cowboy" Ben Alman

 * Dual licensed under the MIT and GPL licenses.

 * http://benalman.com/about/license/

 */

(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;jQuery.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if(jQuery.guid){g.guid=j.guid=j.guid||jQuery.guid++}return g};jQuery.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);



if(!$ && jQuery){

	var $ = jQuery;

}
}
/*
     FILE ARCHIVED ON 02:30:39 Nov 21, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:58:16 Dec 16, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.812
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.009
  esindex: 0.018
  cdx.remote: 42.38
  LoadShardBlock: 2337.754 (3)
  PetaboxLoader3.datanode: 2741.549 (6)
  load_resource: 507.077 (2)
  PetaboxLoader3.resolve: 80.833
  loaddict: 63.0
*/