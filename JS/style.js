
    <!--Start bacground moving-->
$(document).ready(function(){
var movementStrength = 7; 
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	 
	$("html").mousemove(function(e){
	 
	          var pageX = e.pageX - ($(window).width() / 1);
	          var pageY = e.pageY - ($(window).height() / 1);
	 
	          var newvalueX = width * pageX * 2;
	          var newvalueY = height * pageY * 2;
	 
	          $('body').css("background-position", newvalueX+"px "+newvalueY+"px");
	});
});  <!--End background moving -->
	               
$ (function() {    <!--Start Hidden POPUP-->
	var moveLeft = 2;
	var moveDown = 0;
	
	$('a#trigger').hover(function(e) {
		$('div#popup').show();
		//.css('top', e.pageY)
		//.css('left', e.pageX)
		//.appendTo('body');
	}, function() {
		$('div#popup').hide();
});
})		<!--Stop Hidden POPUP-->
		<!--Start Fly sledilec cursor-->
var trailimage=["http://test2.baytfix.com/Photo/fly4.png", 110, 110] //image path, plus width and height
var offsetfrommouse=[8,27] //image x,y offsets from cursor position in pixels. Enter 0,0 for no offset
var displayduration=0 //duration in seconds image should remain visible. 0 for always.

if (document.getElementById || document.all)
document.write('<div id="cursor" style="position:absolute;visibility:visible;left:0px;top:0px;width:1px;height:1px"><img src="'+trailimage[0]+'" border="0" width="'+trailimage[1]+'px" height="'+trailimage[2]+'px"></div>')

function gettrailobj(){
if (document.getElementById)
return document.getElementById("cursor").style
else if (document.all)
return document.all.trailimagid.style
}
function truebody(){
return (!window.opera && document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}
function hidetrail(){
gettrailobj().visibility="hidden"
document.onmousemove=""
}
function followmouse(e){
var xcoord=offsetfrommouse[0]
var ycoord=offsetfrommouse[1]
if (typeof e != "undefined"){
xcoord+=e.pageX
ycoord+=e.pageY
}
else if (typeof window.event !="undefined"){
xcoord+=truebody().scrollLeft+event.clientX
ycoord+=truebody().scrollTop+event.clientY
}
var docwidth=document.all? truebody().scrollLeft+truebody().clientWidth : pageXOffset+window.innerWidth-15
var docheight=document.all? Math.max(truebody().scrollHeight, truebody().clientHeight) : Math.max(document.body.offsetHeight, window.innerHeight)
if (xcoord+trailimage[1]+3>docwidth || ycoord+trailimage[2]> docheight)
gettrailobj().display="none"
else
gettrailobj().display=""
gettrailobj().left=xcoord+"px"
gettrailobj().top=ycoord+"px"
}
document.onmousemove=followmouse
if (displayduration>0)
setTimeout("hidetrail()", displayduration*1000)
	<!--Stop Fly sledilec cursor-->
	/*Start Code for dissable active link*/	
$('a.active-or-any-selector').click(function(){ return false;});
	/*End Code for dissable active link*/
	/*START Slider in book demonstration */
function slideSwitch() {
    var $active = $('.slider IMG.active');

    if ( $active.length == 0 ) $active = $('.slider IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('.slider IMG:first');

    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 2000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 4000 );
});
	/*END Slider in book demonstration */
	/*Predstavitev in services strani*/
	$(document).ready(function(){
	$('.top-akcije').on('mouseenter', function(){
		$(this).show('data-cena')
	});
	$('dd').hide();
	$('dl').on('mouseenter', 'dt', function(){
		$(this).next().slideDown(300).siblings('dd').slideUp(300);
	});
});
	/*Konec predstavitve in services strani*/

