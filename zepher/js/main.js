var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});












function isContained(m, e){
	var e=e||window.event;
	var c=/(click)|(mousedown)|(mouseup)/i.test(e.type)? e.target : ( e.relatedTarget || ((e.type=="mouseover")? e.fromElement : e.toElement) );
	while (c && c!=m)try {c=c.parentNode} catch(e){c=m};
	if (c==m)
		return true;
	else
		return false;
}

window.addEventListener('load', function(){

	var box2 = document.getElementById('child2'),
			detecttouch = !!('ontouchstart' in window) || !!('ontouchstart' in document.documentElement) || !!window.ontouchstart || !!window.Touch || !!window.onmsgesturechange || (window.DocumentTouch && window.document instanceof window.DocumentTouch),
			boxleft, // left position of moving box
			startx, // starting x coordinate of touch point
			dist = 0, // distance traveled by touch point
			touchobj = null, // Touch object holder
			ismousedown = false;
	
	box2.addEventListener('touchstart', function(e){
		touchobj = e.changedTouches[0]; // reference first touch point
		boxleft = parseInt(box2.style.left); // get left position of box
		startx = parseInt(touchobj.clientX); // get x coord of touch point
		// e.preventDefault() // prevent default click behavior 
	}, false);
	
	box2.addEventListener('touchmove', function(e){
		touchobj = e.changedTouches[0]; // reference first touch point for this event
		var dist = (parseInt(touchobj.clientX) - startx)*2; // calculate dist traveled by touch point
		// move box according to starting pos plus dist, with lower limit 0 and upper limit 380 so it doesn't move outside track
		box2.style.left = ( (boxleft + dist > 0)? 0 : (boxleft + dist < -1700)? -1700 : boxleft + dist ) + 'px';
		// e.preventDefault() 
	}, false);
	
	if (!detecttouch){
		document.body.addEventListener('mousedown', function(e){
			if ( isContained(box2, e) ){
				touchobj = e; // reference first touch point
				boxleft = parseInt(box2.style.left); // get left position of box
				startx = parseInt(touchobj.clientX); // get x coord of touch point
				ismousedown = true;
				e.preventDefault(); // prevent default click behavior
			}
		}, false)
		
		document.body.addEventListener('mousemove', function(e){
			if (ismousedown){
				touchobj = e; // reference first touch point for this event
				var dist = (parseInt(touchobj.clientX) - startx)*2; // calculate dist traveled by touch point
				// move box according to starting pos plus dist, with lower limit 0 and upper limit 380 so it doesn't move outside track
				// console.log(startx);
				console.log(box2.style);
				box2.style.left = ( (boxleft + dist > 0)? 0 : (boxleft + dist < -1600)? -1600 : boxleft + dist ) + 'px';
				e.preventDefault();
			}
		}, false)
		
		document.body.addEventListener('mouseup', function(e){
			if (ismousedown){
				touchobj = e // reference first touch point
				boxleft = parseInt(box2.style.left) // get left position of box
				startx = parseInt(touchobj.clientX) // get x coord of touch point
				ismousedown = false
				e.preventDefault() // prevent default click behavior
			}
		}, false)
	}
}, false)



window.addEventListener('load', function(){

	var box3 = document.getElementById('team-child2'),
			detecttouch = !!('ontouchstart' in window) || !!('ontouchstart' in document.documentElement) || !!window.ontouchstart || !!window.Touch || !!window.onmsgesturechange || (window.DocumentTouch && window.document instanceof window.DocumentTouch),
			boxleft, // left position of moving box
			startx, // starting x coordinate of touch point
			dist = 0, // distance traveled by touch point
			touchobj = null, // Touch object holder
			ismousedown = false;
	
	box3.addEventListener('touchstart', function(e){
		touchobj = e.changedTouches[0]; // reference first touch point
		boxleft = parseInt(box3.style.left); // get left position of box
		startx = parseInt(touchobj.clientX); // get x coord of touch point
		// e.preventDefault() // prevent default click behavior 
	}, false);
	
	box3.addEventListener('touchmove', function(e){
		touchobj = e.changedTouches[0]; // reference first touch point for this event
		var dist = (parseInt(touchobj.clientX) - startx)*2; // calculate dist traveled by touch point
		// move box according to starting pos plus dist, with lower limit 0 and upper limit 380 so it doesn't move outside track
		box3.style.left = ( (boxleft + dist > 0)? 0 : (boxleft + dist < -400)? -400 : boxleft + dist ) + 'px';
		// e.preventDefault() 
	}, false);
	
	if (!detecttouch){
		document.body.addEventListener('mousedown', function(e){
			if ( isContained(box3, e) ){
				touchobj = e; // reference first touch point
				boxleft = parseInt(box3.style.left); // get left position of box
				startx = parseInt(touchobj.clientX); // get x coord of touch point
				ismousedown = true;
				e.preventDefault(); // prevent default click behavior
			}
		}, false)
		
		document.body.addEventListener('mousemove', function(e){
			if (ismousedown){
				touchobj = e; // reference first touch point for this event
				var dist = (parseInt(touchobj.clientX) - startx)*2; // calculate dist traveled by touch point
				// move box according to starting pos plus dist, with lower limit 0 and upper limit 380 so it doesn't move outside track
				// console.log(startx);
				console.log(box3.style);
				box3.style.left = ( (boxleft + dist > 100)? 100 : (boxleft + dist < -400)? -400 : boxleft + dist ) + 'px';
				e.preventDefault();
			}
		}, false)
		
		document.body.addEventListener('mouseup', function(e){
			if (ismousedown){
				touchobj = e // reference first touch point
				boxleft = parseInt(box3.style.left) // get left position of box
				startx = parseInt(touchobj.clientX) // get x coord of touch point
				ismousedown = false
				e.preventDefault() // prevent default click behavior
			}
		}, false)
	}
}, false)


