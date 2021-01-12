var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


jQuery("#child2").draggable({ 
    cursor: "move", 
    // containment: "parent",
	axis: "x",
    stop: function() {
      if(jQuery("#child2").position().left < -1300)
          jQuery("#child2").css("left", "-1300px");
	  
      else if(jQuery("#child2").position().left > 150)
          jQuery("#child2").css("left", "150px");
    }
});



let elementsArray = document.querySelectorAll(".open-modal");

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
		document.querySelector("#contact_form").style.display = 'block';
		// document.querySelector("#modal-container").style.overflow = 'visible';
		document.querySelector("body").style.overflow = 'hidden';
    });
});

// document.querySelector(".open-modal").addEventListener('click', function() {
    // document.querySelector("#modal-container").style.display = 'block';
    // document.querySelector("body").style.overflow = 'hidden';
// });

document.querySelector("#close-modal").addEventListener('click', function() {
    document.querySelector("#contact_form").style.display = 'none';
    document.querySelector("body").style.overflow = 'visible';
});