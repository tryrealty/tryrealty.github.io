


let elementsArray = document.querySelectorAll(".open-modal");

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
		document.querySelector("#contact_form").style.display = 'block';
		document.querySelector("body").style.overflow = 'hidden';
    });
});


document.querySelector("#close-modal").addEventListener('click', function() {
    document.querySelector("#contact_form").style.display = 'none';
    document.querySelector("body").style.overflow = 'visible';
});





// var score = 0;

function random(min,max){
 	return Math.round(Math.random() * (max-min) + min);
}

function dropBox(){
  var length = random(10, ($(".contact_form").width() - 80));
  var velocity = random(5000, 7000);
  
  //insert gift element
if (document.querySelector("#contact_form").style.display == 'block') {
  var size = random(50, 100);
} else {
  var size = random(20, 60);
  }
  
  var thisBox = $("<div/>", {
    class: "box",
    // style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; opacity: 1; transition: transform " +velocity+ "ms linear,  opacity 2s linear;"
    style:  "width:" +size+ "px; height:"+size+"px; left:" + length+ "px; transition: transform " +velocity+ "ms linear;"
    // style:  "width:" +size+ "px; height:"+size+"px; left:" + length+ "px; opacity: 1; transition: opacity " +velocity+ "ms linear;"
  });
  
  //set data and bg based on data
  thisBox.data("test", Math.random());
  if(thisBox.data("test") >= 0 &&  thisBox.data("test") < 0.1){
    thisBox.css({"background": "url('./particles/part1.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.1 &&  thisBox.data("test") < 0.2){
    thisBox.css({"background": "url('./particles/part2.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.2 &&  thisBox.data("test") < 0.3){
    thisBox.css({"background": "url('./particles/part3.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.3 &&  thisBox.data("test") < 0.4){
    thisBox.css({"background": "url('./particles/part4.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.4 &&  thisBox.data("test") < 0.5){
    thisBox.css({"background": "url('./particles/part5.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.5 &&  thisBox.data("test") < 0.6){
    thisBox.css({"background": "url('./particles/part6.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.6 &&  thisBox.data("test") < 0.7){
    thisBox.css({"background": "url('./particles/part7.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.7 &&  thisBox.data("test") < 0.8){
    thisBox.css({"background": "url('./particles/part8.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.8 &&  thisBox.data("test") < 0.9){
    thisBox.css({"background": "url('./particles/part9.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.9 &&  thisBox.data("test") <= 1){
    thisBox.css({"background": "url('./particles/part0.png')", "background-size":"contain"});
  }
  
  
  //insert gift element
if (document.querySelector("#contact_form").style.display == 'block') {
	$(".contact_form").append(thisBox);
} else {
	$(".particles").append(thisBox);
	// if ($(".contact_form").width() < 730) $(".particles").append(thisBox);
  }
  
  //random start for animation
  setTimeout(function(){
    thisBox.addClass("move");
  }, random(0, 5000) );
  
  //remove this object when animation is over
  thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    $(this).remove();
  });
}

for (i = 0; i < 10; i++) { 
  dropBox();
}

$(document).on('click', '.box', function(){

  
  // if($(this).data("test")){
    // score += 1;
  // } else {
    // score -= 1;
  // }
  
  // $(".score").html(score);
  $(this).remove();
});

var runGame = setInterval(function(){
                for (i = 0; i < 10; i++) { 
                  dropBox();
                }  
              }, 3000);      //////////// КОЛИЧЕСТВО

function countdown() {
	    function tick() {
	            setTimeout(tick, 1000);
	    }
    	tick();
	}

countdown();