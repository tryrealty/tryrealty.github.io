var score = 0;
var color = "blue";

function random(min,max){
 	return Math.round(Math.random() * (max-min) + min);
}

function dropBox(){
  var length = random(100, ($(".game").width() - 100));
  var velocity = random(5000, 7000);
  var size = random(50, 100);
  var thisBox = $("<div/>", {
    class: "box",
    style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
  });
  
  //set data and bg based on data
  thisBox.data("test", Math.random());
  if(thisBox.data("test") >= 0 &&  thisBox.data("test") < 0.1){
    thisBox.css({"background": "url('part1.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.1 &&  thisBox.data("test") < 0.2){
    thisBox.css({"background": "url('part2.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.2 &&  thisBox.data("test") < 0.3){
    thisBox.css({"background": "url('part3.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.3 &&  thisBox.data("test") < 0.4){
    thisBox.css({"background": "url('part4.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.4 &&  thisBox.data("test") < 0.5){
    thisBox.css({"background": "url('part5.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.5 &&  thisBox.data("test") < 0.6){
    thisBox.css({"background": "url('part6.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.6 &&  thisBox.data("test") < 0.7){
    thisBox.css({"background": "url('part7.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.7 &&  thisBox.data("test") < 0.8){
    thisBox.css({"background": "url('part8.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.8 &&  thisBox.data("test") < 0.9){
    thisBox.css({"background": "url('part9.png')", "background-size":"contain"});
  } else if(thisBox.data("test") >= 0.9 &&  thisBox.data("test") <= 1){
    thisBox.css({"background": "url('part0.png')", "background-size":"contain"});
  }
  
  
  //insert gift element
  $(".game").append(thisBox);
  
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

  
  if($(this).data("test")){
    score += 1;
  } else {
    score -= 1;
  }
  
  $(".score").html(score);
  $(this).remove();
});

var runGame = setInterval(function(){
                for (i = 0; i < 10; i++) { 
                  dropBox();
                }  
              }, 5000);

function countdown() {
	    function tick() {
	            setTimeout(tick, 1000);
	    }
    	tick();
	}

countdown();