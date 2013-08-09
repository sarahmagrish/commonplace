---
---
{% include JB/setup %}

(function () {
'use strict';

if (window.location.hash) {
    window.originalHash = window.location.hash;
    window.location.replace("#");

    // slice off the remaining '#' in HTML5:    
    if (typeof window.history.replaceState == 'function') {
      history.replaceState({}, '', window.location.href.slice(0, -1));
    }
} else {
    window.originalHash = false;
}

/*! Backstretch - v2.0.3 - 2012-11-30
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2012 Scott Robbin; Licensed MIT */
(function(e,t,n){"use strict";e.fn.backstretch=function(r,s){return(r===n||r.length===0)&&e.error("No images were supplied for Backstretch"),e(t).scrollTop()===0&&t.scrollTo(0,0),this.each(function(){var t=e(this),n=t.data("backstretch");n&&(s=e.extend(n.options,s),n.destroy(!0)),n=new i(this,r,s),t.data("backstretch",n)})},e.backstretch=function(t,n){return e("body").backstretch(t,n).data("backstretch")},e.expr[":"].backstretch=function(t){return e(t).data("backstretch")!==n},e.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var r={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},img:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxWidth:"none",zIndex:-999999}},i=function(n,i,o){this.options=e.extend({},e.fn.backstretch.defaults,o||{}),this.images=e.isArray(i)?i:[i],e.each(this.images,function(){e("<img />")[0].src=this}),this.isBody=n===document.body,this.$container=e(n),this.$wrap=e('<div class="backstretch"></div>').css(r.wrap).appendTo(this.$container),this.$root=this.isBody?s?e(t):e(document):this.$container;if(!this.isBody){var u=this.$container.css("position"),a=this.$container.css("zIndex");this.$container.css({position:u==="static"?"relative":u,zIndex:a==="auto"?0:a,background:"none"}),this.$wrap.css({zIndex:-999998})}this.$wrap.css({position:this.isBody&&s?"fixed":"absolute"}),this.index=0,this.show(this.index),e(t).on("resize.backstretch",e.proxy(this.resize,this)).on("orientationchange.backstretch",e.proxy(function(){this.isBody&&t.pageYOffset===0&&(t.scrollTo(0,1),this.resize())},this))};i.prototype={resize:function(){try{var e={left:0,top:0},n=this.isBody?this.$root.width():this.$root.innerWidth(),r=n,i=this.isBody?t.innerHeight?t.innerHeight:this.$root.height():this.$root.innerHeight(),s=r/this.$img.data("ratio"),o;s>=i?(o=(s-i)/2,this.options.centeredY&&(e.top="-"+o+"px")):(s=i,r=s*this.$img.data("ratio"),o=(r-n)/2,this.options.centeredX&&(e.left="-"+o+"px")),this.$wrap.css({width:n,height:i}).find("img:not(.deleteable)").css({width:r,height:s}).css(e)}catch(u){}return this},show:function(t){if(Math.abs(t)>this.images.length-1)return;this.index=t;var n=this,i=n.$wrap.find("img").addClass("deleteable"),s=e.Event("backstretch.show",{relatedTarget:n.$container[0]});return clearInterval(n.interval),n.$img=e("<img />").css(r.img).bind("load",function(t){var r=this.width||e(t.target).width(),o=this.height||e(t.target).height();e(this).data("ratio",r/o),e(this).fadeIn(n.options.speed||n.options.fade,function(){i.remove(),n.paused||n.cycle(),n.$container.trigger(s,n)}),n.resize()}).appendTo(n.$wrap),n.$img.attr("src",n.images[t]),n},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(this.index===0?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return this.images.length>1&&(clearInterval(this.interval),this.interval=setInterval(e.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(n){e(t).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),n||this.$wrap.remove(),this.$container.removeData("backstretch")}};var s=function(){var e=navigator.userAgent,n=navigator.platform,r=e.match(/AppleWebKit\/([0-9]+)/),i=!!r&&r[1],s=e.match(/Fennec\/([0-9]+)/),o=!!s&&s[1],u=e.match(/Opera Mobi\/([0-9]+)/),a=!!u&&u[1],f=e.match(/MSIE ([0-9]+)/),l=!!f&&f[1];return!((n.indexOf("iPhone")>-1||n.indexOf("iPad")>-1||n.indexOf("iPod")>-1)&&i&&i<534||t.operamini&&{}.toString.call(t.operamini)==="[object OperaMini]"||u&&a<7458||e.indexOf("Android")>-1&&i&&i<533||o&&o<6||"palmGetResource"in t&&i&&i<534||e.indexOf("MeeGo")>-1&&e.indexOf("NokiaBrowser/8.5.0")>-1||l&&l<=6)}()})(jQuery,window);

// swiping events
(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false)}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){return J[a7].distance}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}})(jQuery);

    var mySwiper;
    window.blockSlideChange=false;
    window.animating=false;

    $('document').ready( function() {
        var $masthead = $('.masthead'),
            hGalleryArray=new Array(),
            loadIntroImages = window.setTimeout(function () {postLoadImages($('div.swiper-slide'),'intro')},3000),
            loadGalleryImages = window.setTimeout(function () {postLoadImages($('img.postload'),'gallery')},6000);

        function getPages(el){
            var $el = el,
                $container=$el.parent(),
                width=0,
                originalScroll=0,
                columnWidth,columnGap,columnsNumber;


            $.each(['-webkit-','-moz-',''], function(i, prefix){
                var _width = parseInt( $el.css(prefix+'column-width'), 10 );
                var _gap =   parseInt( $el.css(prefix+'column-gap'), 10 );
                if (!isNaN(_width)) columnWidth = _width;
                if (!isNaN(_gap))   columnGap = _gap;                
            });

            originalScroll=$container.scrollLeft();
            $container.scrollLeft(10000000);
            width=$container.scrollLeft()+columnWidth+columnGap;
            $container.scrollLeft(originalScroll);

            columnsNumber = Math.floor( width / (columnWidth + columnGap) )+1;
            if (isNaN(columnsNumber) || columnsNumber < 1) columnsNumber = 1;
            return columnsNumber;
        }

        function postLoadImages ($theImages, which){
                $theImages.each(function () {
                    var $this=$(this),
                    theSource=$this.data('img') || false;

                    if (theSource)
                        if (which=='gallery'){
                            $this.attr('src', theSource);
                        } else {
                            $('<img />')[0].src = theSource;
                        }   
                });

            }

            

        mySwiper = new Swiper('.swiper-root',{
            mode:'vertical',
            // loop: true,
            simulateTouch: true,
            mousewheelControl: true,
            keyboardControl: true,
            grabCursor: true,
            onSlideChangeStart: function (swiper) {
                var $slide = $(swiper.getSlide(swiper.realIndex));

                if (!$slide.hasClass('marker-slide')) {
                    //$('#map').children('div:last-child').removeClass('active-map');
                    $('.swiper-root').addClass('no-touch-event');
                    $('.legend, .leaflet-control-zoom, #map > .page-footer').addClass('hidden');

                    $('.layer-on').each(function (i, layer) {
                        map.removeLayer(currentLayers[$(layer).data('layer')]);
                    });
                    map.dragging.disable();
                    map.touchZoom.disable();
                    map.doubleClickZoom.disable();
                    map.scrollWheelZoom.disable();
                }
            },
            onSlideChangeEnd: function (swiper) {
                var $slide = $(swiper.getSlide(swiper.realIndex)),
                    $shortPost = $slide.find('.short-post'),
                    $longPost = $slide.find('.post'),
                    $gallery = $slide.find('.gallery'),
                    backgroundImage = $slide.data('img'),
                    currentBackgroundPath = $('.swiper-root').css('background-image').split('/'),
                    //currentBackgroundImage = currentBackgroundPath[currentBackgroundPath.length-1].replace(')',''),
                    currentBackgroundImage = $('.backstretch:last img',$('.swiper-root')).attr('src'),
                    //subBackgroundImage = false,
                    preserveBodyBackground = $slide.children('div.page.full').length,
                    contentWidth = $longPost.width()+"px",
                    childSliderID=$('.gallery',$slide).attr('id') || '',
                    subSlideIsLight=undefined,
                    nextStoryName=$slide.next().attr('id') || false;


                //set this slide to be 'active' for purposes of applying global keypress events
                $('.swiper-root>.swiper-wrapper>div.swiper-slide').removeClass('active');
                $slide.addClass('active');

                // show or hide the nav
                if ($slide.data('hash')) {
                    window.location.hash = $slide.data('hash');
                }
               if (swiper.activeIndex !== 0) {
                    $masthead.removeClass('hidden');
                } else {
                    $masthead.addClass('hidden');
                }

                //set the body class as light or dark to change nav and sidebar colors for different backgrounds
                if (!(hGalleryArray[childSliderID]===undefined))     {          
                    subSlideIsLight=$('.swiper-slide',$slide).eq(hGalleryArray[childSliderID].activeSlide).hasClass('light');
                    //subBackgroundImage=$('.swiper-slide',$slide).eq(hGalleryArray[childSliderID].activeSlide).data('img');
                }

                if ((($slide.find('div.page.light').length) && subSlideIsLight === undefined) || (subSlideIsLight)) {
                    $('body').addClass('dark');
                } else {
                    $('body').removeClass('dark');
                }

                // update the background image
                if (backgroundImage && currentBackgroundImage !== backgroundImage && !preserveBodyBackground) {
                    $('.swiper-root').backstretch(backgroundImage, {fade:450}); 
                    if ($('.backstretch',$('.swiper-root')).length>2) $('.backstretch:lt(1)',$('.swiper-root')).remove();                   
                } else if (! backgroundImage && !preserveBodyBackground) {
                    $('.swiper-root').children('.backstretch').remove();
                }


                // find the name of the next story and populate the div under the right nav arrow
                if(nextStoryName) {
                    $slide.find('.next-story-name').text(nextStoryName.split('-').join(' '));
                }
                if (swiper.activeIndex > 1){
                    $('#-zoom-7').parent().fadeOut("fast");
                } else {
                    $('#-zoom-7').parent().fadeIn("fast");
                }

                // activate textify swiper and add captions to images
                if ($longPost.length) {

                   var theImages=$('img:not([src*="contributor-headshots"])',$longPost);


                   $('img',$longPost).on('click',function () {
                        var $theImage = theImages.filter('img[src="'+$(this).attr("src")+'"]'),
                        $theBox=$('<div id="the-lightbox" style="width:100%"><div class="popover-close">close</div><div id="the-lightbox-content" style="margin-top:30px;width:100%;text-align:center;height:'+($(window).height()-150)+'px;"></div></div>');
                        $theImage.css({'max-height':'100%','cursor':'pointer'});
                        $theBox.find(":nth-child(2)").append($theImage.clone()).append('<div class="caption">'+$(this).attr("alt")+'</div>');
                        //debugger;
                       $theBox.lightbox_me({
                            centered:false,
                            destroyOnClose:true,
                            modalCSS: {top: '0'},
                            closeSelector:'.popover-close',
                            overlayCSS:{background: 'white', opacity: .9}    
                        });
                   });
                    
                   
                    $('.columns',$longPost).css({'-webkit-column-width':contentWidth,
                                                '-moz-column-width':contentWidth,
                                                'column-width':contentWidth,
                                                '-webkit-column-gap':0,
                                                '-moz-column-gap':0,
                                                'column-gap':0,
                                                'height':'100%'});


                    setTimeout(function () {theImages.each(function () {
                        var $this=$(this),
                            theCaption=$this.attr('alt');

                        if (!$this.parent().find('span').length) {
                            $this.parent().css({'position':'relative','float':'left'}).append('<span class="caption">'+theCaption+'</span>').find('span').css('top',function () {
                                var $that=$this;
                                
                                return ($that.height()-$(this).height())+$that.position().top;
                            });
                        }
                    }) },500);

                    if(!($longPost.find('#x-of-y')).length){
                        $longPost.append('<div id="x-of-y" style="text-align:center;position:absolute;bottom:3%;left:0;width:100%"><span class="x intro">1</span> <span class="of">of</span> <span class="y intro"></span></div>');
                    }

                    setTimeout(function () {$('span.y', $longPost).text(getPages($('.columns',$longPost)));}, 500);

                    $longPost.removeClass('hidden');
                }


                //activate horizontal slider if there is one
                if ($gallery.length) {
                    var theID=$gallery.attr('id'),
                        paginationClass='.'+theID+'-pagination';

                    // Add this new gallery object into an array for
                    // later access to the swiper methods
                    if(!(theID in hGalleryArray)){
                    hGalleryArray[theID]= $gallery.swiper({
                        mode: 'horizontal',
                        pagination : paginationClass,
                        keyboardControl:false,
                        createPagination: true,                        
                        onSlideChangeEnd: function (swiper) {
                            var $slide = $(swiper.getSlide(swiper.realIndex)),
                                $slideRoot = $slide.parentsUntil(".page.full",".page-wrapper"),
                                backgroundImage = $slide.data('img'),
                                $voiceWrapper=$slide.find('.voice-content-wrapper');


                            // update body class to change element colors + update the background image
                            //(swiper.activeIndex==0 && $slideRoot.parent().hasClass("light")) ? $('body').addClass('dark') : $('body').removeClass('dark');
                            if (backgroundImage) {
                                $slideRoot.backstretch(backgroundImage, {fade:450});
                                if ($('.backstretch',$slideRoot).length>2) $('.backstretch:lt(1)').remove();
                            } else {
                                $('.backstretch',$slideRoot).remove();
                            }

                            if ($slide.hasClass('light')){
                                $('body').addClass('dark');
                            } else {
                                $('body').removeClass('dark');
                            }

                            //check to see if this is the last slide
                            if ((swiper.slides.length-1)==swiper.activeIndex){
                                $('.swiper-slide.active').addClass('last-page');
                            } else if (swiper.activeIndex==0) {
                                $('.swiper-slide.active').addClass('first-page');
                            }else {
                                $('.swiper-slide.active').removeClass('last-page first-page');
                            }

                            // initialize scroll buttons for voices content if overflowing
                            if ($voiceWrapper && (!($voiceWrapper.find('.voice-scroller').length))) {                                    
                                if(($('.voice-content-text',$voiceWrapper).height())>($('.voice-content',$voiceWrapper).height())) {
                                    $voiceWrapper.prepend('<div class="voice-scroller"><span class="up"></span><span class="down"></span></div>');
                                }
                            } //end voices bio scroll button init
                        } //end onSlideChangeEnd callback for horizontal slider                        
                    }); // end init array for main-slide-contained horizontal gallery
                    
                    } // end if block checking for gallery object existance
                    $(document).trigger('galleryBuilt');
                } // end block checking if this slide contains a horizontal 



                if ($slide.hasClass('marker-slide')) {
                    $('.legend, .leaflet-control-zoom, #map > .page-footer').removeClass('hidden');
                    // map.addLayer(markerLayer);
                    window.blockSlideChange=true;
                    //$('#map').children('div:last-child').addClass('active-map');
                    $('.swiper-root').addClass('no-touch-event');
                    if (!($('#map').children('.page-footer').length)) {
                        $('#map').append('<div class="page-footer"><a href="#"><i class="icon-chevron-down"></i></a></div>')
                    }
                    $('.layer-on').each(function (i, layer) {
                        currentLayers[$(layer).data('layer')].addTo(map);
                    });
                    map.dragging.enable();
                    map.touchZoom.enable();
                    map.doubleClickZoom.enable();
                    map.scrollWheelZoom.enable();
                } else {
                    // map.removeLayer(markerLayer);
                    $('.swiper-root').removeClass('no-touch-event');
                    window.blockSlideChange=false;
                }

            }, // end on slideChangeEnd callback for main vertical slider
            scrollbar: {
                container : '.swiper-scrollbar',
                draggable : true,
                hide: false,
                snapOnRelease: true
            } //end scrollbar plugin parameter array
        });  //end init block for main vertical swiper         
        
//Begin main event bindings

        // Activate left/right arrows that we've placed on top of all horizontally enabled slides
        $('.navarrows a, .next-story').on('click',function (e){
            if (window.animating) return;
            e.preventDefault();
            e.stopPropagation();
            var $hContainer=$(this).parentsUntil('div.swiper-slide','div.page').find('div.page-wrapper'),
                isGallery=$hContainer.hasClass('gallery-wrapper'),
                // yes, here theID may be a string, or it may be an object. sorry.
                theID= isGallery ? $hContainer.find('.gallery').attr('id') : $hContainer.find('.text_pagination'),
                $activeSlide = $('.swiper-slide.active'),
                $wrapper=$('.page-content',$activeSlide);

                if ($activeSlide.hasClass('last-page') && ($(this).hasClass("next-story") || $(this).hasClass("right-arrow"))) {
                    mySwiper.swipeNext();
                    return;
                } 

                if(isGallery){
                    //this is a swiper gallery.  simply use the built in swipeNext/swipePrev methods
                    $(this).hasClass("right-arrow") ? hGalleryArray[theID].swipeNext() : hGalleryArray[theID].swipePrev();
                } else { 
                    //this isn't a gallery -> must be a textify slide. update logic later if more slide types introduced
                    //we need to fire the click event on the next/previous hilited number
                    //as textify doesn't supply prev/next navigation methods

                     var theGalIndex=$('span.x',$activeSlide).text(),
                     maxNav=$('span.y',$activeSlide).text();

                    //are we going right?
                    if ($(this).hasClass("right-arrow") || $(this).hasClass("next-story")) { 
                        //can we go right?
                        if ((parseInt(theGalIndex)+1)<=maxNav) {
                            window.animating=true;
                            $wrapper.animate({scrollLeft: $wrapper.scrollLeft()+$wrapper.width()}, 200, function () {window.animating=false;});
                            $('span.x',$activeSlide).text(++theGalIndex);
                        }
                    } else { //it appears we're going left
                        //can we go left?
                        if ((parseInt(theGalIndex)-1)>=1) {
                            window.animating=true;
                            $wrapper.animate({scrollLeft: $wrapper.scrollLeft()-$wrapper.width()}, 200, function () {window.animating=false;});
                            $('span.x',$activeSlide).text(--theGalIndex);
                        }
                    } // end logic for textify left/right navigation

                    if (theGalIndex>=maxNav) {
                        $('.swiper-slide.active').addClass('last-page');
                    } else if (theGalIndex=='1') {
                        $('.swiper-slide.active').addClass('first-page');
                    } else {
                        $('.swiper-slide.active').removeClass('first-page last-page');
                    }


                } // end logc blocks for gallery vs textified slide
        }); // end function for nav arrow click handling

        // Control the horizontal sliders with click functions
        $('.gallery-wrapper').on('click','.sub-toc-item,.swiper-pagination-switch',function(e){
            e.preventDefault();
            var theID=$(this).parentsUntil('.page.full').find('.swiper-container').attr('id'),
                theGalIndex = $(this).hasClass('sub-toc-item') ? $(this).index()+1 : $(this).index();
            hGalleryArray[theID].swipeTo(theGalIndex);
        });

        // nav to story from map
        $('#map').on('click', '.leaflet-popup a', function (e) {
            var $link = $(this);
            e.preventDefault();
            if ($link.hasClass('voices-link')) {
                mySwiper.swipeTo($('#voices').index());
                $(document).one('galleryBuilt',function () {hGalleryArray['voices-gallery'].swipeTo($($link.data('story')).index())});
            } else {
                mySwiper.swipeTo($($link.data('story')).index());
            }
        });

        // Control the horizontal sliders using arrow keys
        $(document).on('keydown',function (e) {
            var kc = e.keyCode || e.charCode;
            if (kc==39 || kc==37){
                e.preventDefault();
                e.stopPropagation();
            }
            if (kc == 39) {
                if(!$('.swiper-slide.active').hasClass('last-page'))
                $('a.right-arrow','.swiper-slide.active').click();
            }
            if (kc == 37) {
                $('a.left-arrow','.swiper-slide.active').click();
            } 
        });

        $(document).swipe({
          swipeLeft:function(event, direction, distance, duration, fingerCount) {
            if(!$('.swiper-slide.active').hasClass('last-page'))
            $('a.right-arrow','.swiper-slide.active').click();
          },
          swipeRight:function(event, direction, distance, duration, fingerCount) {
            $('a.left-arrow','.swiper-slide.active').click();
          }
        });



        
//         $('.addthis_toolbox a').on('click',function (e) {
//             e.preventDefault();
//             var theURL=$(this).attr("href").replace(/ /g,'+').replace('#','%23');
//             console.log(theURL);
//             window.open (theURL,'Sharing is caring','height=400,width=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,directories=no,status=no')

// //             var $theBox=$('<div id="the-lightbox" style="width:100%"><div class="popover-close">close</div><div id="the-lightbox-content" style="margin-top:30px;width:100%;text-align:center;height:'+($(window).height()-150)+'px;"><iframe id="foo" style="z-index: 1;border: none; margin: 0; padding: 0; position: absolute; width: 75%; height: 100%; top: 0; left: 0; filter: mask();"/></div></div>');

// // debugger;

// //             $theBox.find("#foo").attr('src',$(this).attr('href'));
// //             //debugger;
// //            $theBox.lightbox_me({
// //                 centered:false,
// //                 destroyOnClose:true,
// //                 modalCSS: {top: '0'},
// //                 closeSelector:'.popover-close',
// //                 overlayCSS:{background: 'white', opacity: .9}    
// //             });
//        });


        // Control voices biography content with up/down arrows
        $('.voice-content-wrapper').on('click','span.up, span.down',function(e){
            e.preventDefault();
            var $this=$(this),
                scrollDown=$this.hasClass('down') ? true : false,
                theContent=$this.parent().siblings('.voice-content'),
                currentScroll=theContent.scrollTop();

            if(scrollDown){
                currentScroll+=(theContent.height()*.3)
            } else{
                currentScroll-=(theContent.height()*.3)                
            }
                $this.parent().siblings('.voice-content').animate({scrollTop: currentScroll}, 300);//.scrollTop(currentScroll);

        });
        

        
 //   }; //end window.onLoad event handler function
}); // end test document.ready wrapper


    $(document).ready(function () {

        var $title = $(".page-header").find('.title-name'),
            $window = $(window),
            $popoverArray=new Array();

            function styleStoryLeadin ($theElement,start,end) {
                var str=$(this).html(),
                delimiter = ' ',
                start = start || 0, end = end || 5,
                first = str.split(delimiter).slice(start,end).join(delimiter),
                last = str.split(delimiter).slice(end).join(delimiter),
                result = "<span class='schoolbook'>"+first+"</span> "+last;
                $(this).html(result);
            }

            // style first five words of body copy with a span to change font to Schoolbook
            $('p:firstChild','div.page-content').each(styleStoryLeadin);
            $('p:firstChild','div.gallery-intro-slide-wrapper').each(styleStoryLeadin);
            $('p:firstChild','div.voice-content-text').each(styleStoryLeadin);
            $('p:firstChild','.about-content').each(styleStoryLeadin);

            //style contributon headshots
            $('div.swiper-slide img[src*="contributor-headshots"]').addClass('img-circle').css({'float': 'left','margin-right': '5px','width': '75px'})
                .parent().next().css({'font-size':'.8em', 'line-height': '1.3em'});

            //remove author from 'your voice' sidebar
            $('div[data-hash="your-voice"] .sidebar-header .author').remove();




/////////////////////////////////////// Initialize menu items and click-to-swipe navigation


        $('a', 'ul.nav').each(function(){
            var $this=$(this),
                theID=$this.attr('id')||false;
            if (theID) {
               $popoverArray[theID]=$('#'+theID);
                $popoverArray[theID].popover({
                    placement: "bottom",
                    trigger: "manual",
                    container: ".toc-section",
                    animation: "false",
                    html: true,
                    content: $('#'+theID+'-content').html()
                });


                $popoverArray[theID].on('click', function (e) {
                    var $popover,
                        tocHeight,
                        $this=$(this);
                    e.preventDefault();
                    //disappear all popovers that are not linked to the clicked item
                    $('a','ul.nav').not('#'+theID).popover('hide');
                    //toggle popover for the clicked item
                    $this.popover('toggle');

                    //set some heights, based on content
                    $popover = $('.toc-section').find('.popover');
                    $popover.addClass('ink-bg');
                    tocHeight = $popover.closest('.toc-section').height();
                    $popover.find('.popover-content').height($popover.closest('.section').height() - tocHeight);
                    $popover.find('.arrow').position({
                       of: $this,
                       my: 'bottom center',
                       at: 'bottom'
                    });


                    // equalize the heights of titles in each row for the TOC item
                    var currentTallest = 0;
                        $('.popover-content h3.story-title').each(function () {                    
                                if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
                            });
                        //if (!px && Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
                        // for ie6, set height since min-height isn't supported
                        if ($.browser.msie && $.browser.version == 6.0) { $(this).children().css({'height': currentTallest}); }
                        $('.popover-content h3.story-title').css({'min-height': currentTallest});

                    
                    // wire up the close "X" button
                    $('.popover-close','.popover').click(function () {
                        $this.popover('hide');
                    });

                }); // end onclick binding for top menu items
            } //end block -> if this anchor has an ID attached to it
        }); //end function to initialize all menu items


        // swipe back to the top, when clicking on "COMMONPLACE" in the header
        $('.nav h2').on('click', function (e) {
            $('a','ul.nav').popover('hide');
            mySwiper.swipeTo(1);
        });

        

        // swipe to the story when you click on the icon in the TOC
        $(document).on('click', '.story', function (e) {
            e.preventDefault();
            $('#toc,#connect').popover('hide');
           mySwiper.swipeTo($($(this).data('story')).index());
        }); // end scroll to clicked story binding


        $('.photo-info').on('click',function () {$(this).toggleClass('visible');});

        //swipe to the next slide when clicking on the yellow arrow at the page footer
        $('#map').on('click','.page-footer', function () {
            mySwiper.swipeNext();            
        }); // end page footer scroll to next page click binding


        // manage hash changes
        if (originalHash) {
            mySwiper.swipeTo($(originalHash).index());    
        }

        // init the audio player for voices
        audiojs.events.ready(function() {
            var as = audiojs.createAll();
        });

    }); //end document.ready function
    

})(); //end generic wrapper function